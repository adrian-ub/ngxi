import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTelescope02Icon],svg[hugeicons-telescope-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 22l-5-9l-5 9m6.92-18L7.027 9.256c-.982.58-1.319 1.866-.752 2.872l1.027 1.82a2.03 2.03 0 0 0 2.806.77L19 9.462m-2.78-5.006a1.637 1.637 0 0 1 2.834-1.637l2.727 4.725a1.637 1.637 0 0 1-2.834 1.637zM2 14.265l.738 1.367m0 0L3.476 17m-.738-1.368L6.5 13.5" color="currentColor"></svg:path>`,
})
export class HugeiconsTelescope02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
