import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderShared03Icon],svg[hugeicons-folder-shared-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 5.778h9.75c2.107 0 3.16 0 3.917.477c.327.207.608.473.827.782c.506.715.506 1.71.506 3.7c0 3.315 0 4.973-.843 6.164a4.9 4.9 0 0 1-1.38 1.303C18.518 19 16.762 19 13.25 19H12c-4.714 0-7.071 0-8.536-1.383S2 14.007 2 9.556V6.67c0-1.716 0-2.574.38-3.217a2.9 2.9 0 0 1 1.158-1.094C4.22 2 5.128 2 6.944 2C8.108 2 8.69 2 9.2 2.18c1.163.412 1.643 1.41 2.168 2.401L12 5.778M12 19v3m8 0H4" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderShared03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
