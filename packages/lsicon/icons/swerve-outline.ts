import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSwerveOutlineIcon],svg[lsicon-swerve-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10.5 7.5h-5V11m3.625-1.625L11 7.5L9.125 5.625M14 7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path>`,
})
export class LsiconSwerveOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
