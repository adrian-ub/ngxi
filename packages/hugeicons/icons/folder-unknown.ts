import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderUnknownIcon],svg[hugeicons-folder-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.001 6.5h9.753c2.107 0 3.16 0 3.918.506a3 3 0 0 1 .828.827c.394.59.48 1.36.5 2.667m-9.997-4l-.634-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.691 2.5 8.11 2.5 6.946 2.5c-1.817 0-2.726 0-3.408.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.465 8.535S7.287 20.5 12.003 20.5h1.5M16 14.478a1.99 1.99 0 0 1 2-1.978c1.105 0 2 .886 2 1.978c0 .394-.116.76-.317 1.069c-.598.919-1.683 1.795-1.683 2.887v.495m0 2.571h.012" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderUnknownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
