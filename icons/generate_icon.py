
from PIL import Image
import os

def create_icons(input_image_path, output_dir):
    """
    Generates icons of various sizes from a master logo image.

    Args:
        input_image_path: Path to the master logo image (e.g., 'masterlogo.png').
        output_dir: Directory to save the generated icons.
    """
    # Define the sizes and their corresponding output filenames
    sizes = {
        (36, 36): "android-icon-36x36.png",
        (48, 48): "android-icon-48x48.png",
        (36, 36): "android-icon-36x36.png",
        (48, 48): "android-icon-48x48.png",
        (72, 72): "android-icon-72x72.png",
        (96, 96): "android-icon-96x96.png",
        (144, 144): "android-icon-144x144.png",
        (192, 192): "android-icon-192x192.png",
        (144, 144): "apple-icon-144x144.png",
        # (57, 57): "apple-icon-57x57.png",
        # (60, 60): "apple-icon-60x60.png",
        # (72, 72): "apple-icon-72x72.png",
        # (76, 76): "apple-icon-76x76.png",
        # (96, 96): "android-icon-96x96.png",
        # (114, 114): "apple-icon-114x114.png",
        # (120, 120): "apple-icon-120x120.png",
        # (144, 144): "android-icon-144x144.png",
        # (152, 152): "apple-icon-152x152.png",
        # (180, 180): "apple-icon-180x180.png",
        # (192, 192): "android-icon-192x192.png",
        # (310, 310): "ms-icon-310x310.png",
        # (150, 150): "ms-icon-150x150.png",
        # (144, 144): "ms-icon-144x144.png",
        # (70, 70): "ms-icon-70x70.png",
        # (16, 16): "favicon-16x16.png",
        # (32, 32): "favicon-32x32.png",
        # (96, 96): "favicon-96x96.png",
        # (0, 0): "favicon.ico",  # Favicon does not have a size
        # (0, 0): "desc.png",      # Placeholder for desc.png
        # (192, 192): "logo192.png",
        # (512, 512): "logo512.png",
        # (0, 0): "apple-icon-precomposed.png",  # Placeholder for precomposed icon
    }

    # Open the master logo image
    with Image.open(input_image_path) as img:
        for size, filename in sizes.items():
            if size == (0, 0):  # For favicon and desc.png
                img.save(os.path.join(output_dir, filename))
            else:
                img_resized = img.resize(size, Image.LANCZOS)
                img_resized.save(os.path.join(output_dir, filename))

if __name__ == "__main__":
    input_image_path = "masterlogo.png"  # Path to your master logo
    output_dir = "icons"  # Output directory for icons

    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    create_icons(input_image_path, output_dir)
    print("Icons generated successfully!")
# from PIL import Image
# import os

# def create_icons(input_image_path, output_dir):
#     """
#     Generates icons of various sizes from a master logo image.

#     Args:
#         input_image_path: Path to the master logo image (e.g., 'masterlogo.png').
#         output_dir: Directory to save the generated icons.
#     """
#     # Define the sizes for the icons
#     sizes = [
#         (36, 36, 'android-icon-36x36.png'),
#         (48, 48, 'android-icon-48x48.png'),
#         (72, 72, 'android-icon-72x72.png'),
#         (96, 96, 'android-icon-96x96.png'),
#         (144, 144, 'android-icon-144x144.png'),
#         (192, 192, 'android-icon-192x192.png'),
#         (144, 144, 'apple-icon-144x144.png'),
     
#     ]

#     # Open the master logo image
#     with Image.open(input_image_path) as img:
#         for size, filename in sizes:
#             # Resize the image
#             img_resized = img.resize((size, size))
#             # Save the resized image
#             img_resized.save(os.path.join(output_dir, filename))

# if __name__ == "__main__":
#     input_image_path = 'masterlogo.png'  # Path to your master logo
#     output_dir = 'icons'  # Output directory for icons
#     create_icons(input_image_path, output_dir)
