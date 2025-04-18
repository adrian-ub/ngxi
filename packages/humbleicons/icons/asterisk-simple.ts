import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsAsteriskSimpleIcon],svg[humbleicons-asterisk-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 4l.005 7.993m0 0l7.603-2.465m-7.603 2.465l4.697 6.48m-4.697-6.48l-4.707 6.48m4.707-6.48L4.392 9.528"></svg:path>`,
})
export class HumbleiconsAsteriskSimpleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
