def is_valid_triangle(a, b, c):
    # Check the triangle inequality conditions
    if a + b > c and a + c > b and b + c > a:
        return "This is a valid triangle"
    else:
        return "This is not a valid triangle"
