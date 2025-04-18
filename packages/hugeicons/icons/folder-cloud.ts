import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderCloudIcon],svg[hugeicons-folder-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.001 6.504h9.753c2.107 0 3.16 0 3.917.507c.328.219.61.5.828.828c.506.758.501 2.063.501 4.172m-9.997-5.507l-.634-1.268c-.525-1.05-1.005-2.108-2.168-2.545C8.691 2.5 8.11 2.5 6.946 2.5c-1.817 0-2.726 0-3.408.38A3 3 0 0 0 2.38 4.04C2 4.722 2 5.63 2 7.45v3.059c0 4.72 0 7.079 1.465 8.545c1.114 1.115 2.745 1.382 5.537 1.446M12 18.833c0 1.473 1.12 2.667 2.5 2.667h5.25c1.243 0 2.25-1.075 2.25-2.4c0-1.442-1.18-2.406-2.261-2.4c.138-1.64-1.095-3.2-2.739-3.2c-1.438 0-2.619 1.178-2.74 2.679c-1.268.129-2.26 1.268-2.26 2.654" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
