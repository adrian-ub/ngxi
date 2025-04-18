import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFitScreenOutlineIcon],svg[lsicon-fit-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4 3.5H1.5V6M4 12.5H1.5V10M12 3.5h2.5V6M12 12.5h2.5V10m-11-4.5h9v5h-9z"></svg:path>`,
})
export class LsiconFitScreenOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
