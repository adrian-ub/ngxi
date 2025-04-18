import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconInfuseTwoFilledIcon],svg[lsicon-infuse-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7 8.293l5.646-5.647l.708.708L7.707 9H11v1H6.5a.5.5 0 0 1-.5-.5V5h1zm-3.999 4.733V9.529h-1v3.997a.5.5 0 0 0 .5.5h11.05a.5.5 0 0 0 .5-.5V9.529h-1v3.497z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconInfuseTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
