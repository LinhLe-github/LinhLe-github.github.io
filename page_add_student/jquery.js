$('form').submit((e)=>{
    e.preventDefault();
    let name = $("input[name = 'name']").val();
    let email = $("input[name = 'email' ]").val();

    $(".data-table tbody").append(
        `<tr data-name = ${name} data-email = ${email}>
            <td>${name}</td>
            <td>${email}</td>
            <td style="text-align:center"><button class='btn btn-info btn-xs btn-edit'>Edit</button> <button class='btn btn-danger btn-xs btn-delete'>Delete</button></td>
        </tr>`
    )

    $("input[name='name']").val('');
    $("input[name='email']").val('');
})

$("body").on("click", ".btn-delete", function(){
    $(this).parents("tr").remove();
});

$("body").on("click",".btn-edit",function(){
    let name = $(this).parents("tr").attr("data-name");

    let email = $(this).parents("tr").attr("data-email");

    
   
   
    $(this).parents("tr").find("td:eq(0)").html(`<input name="edit_name" value=${name}>`);
    $(this).parents("tr").find("td:eq(1)").html(`<input name="edit_email" value=${email}>`);

    $(this).parents("tr").find("td:eq(2)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    
})

$("body").on("click",".btn-update",function(){
    let name = $(this).parents("tr").find("input[name='edit_name']").val();
    let email = $(this).parents("tr").find("input[name='edit_email']").val();
    $(this).parents("tr").find("td:eq(0)").text(name);
    $(this).parents("tr").find("td:eq(1)").text(email);
    $(this).parents("tr").attr('data-name', name);
    $(this).parents("tr").attr('data-email', email);

    $(this).parents("tr").find(".btn-edit").show();

    $(this).parents("tr").find(".btn-cancel").remove();

    $(this).parents("tr").find(".btn-update").remove();
})

$("body").on("click", ".btn-cancel", function(){

    var name = $(this).parents("tr").attr('data-name');

    var email = $(this).parents("tr").attr('data-email');

    $(this).parents("tr").find("td:eq(0)").text(name);

    $(this).parents("tr").find("td:eq(1)").text(email);

    $(this).parents("tr").find(".btn-edit").show();

    $(this).parents("tr").find(".btn-update").remove();

    $(this).parents("tr").find(".btn-cancel").remove();

});



