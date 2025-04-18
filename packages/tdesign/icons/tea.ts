import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTeaIcon],svg[tdesign-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v5H9V2zM7 3v4H5V3zm8 0v4h-2V3zM2.927 8H21v5a4 4 0 0 1-4 4h-.933a6.67 6.67 0 0 1-2.583 3H20v2H3v-2h3.506a6.6 6.6 0 0 1-3.084-5.039v-.007zm13.648 7H17a2 2 0 0 0 2-2v-3h-2.068l-.353 4.954v.007zm-1.648-5H5.074l.341 4.797A4.603 4.603 0 0 0 10 19c2.059 0 3.836-1.38 4.412-3.289c.09-.295.145-.587.173-.914z"></svg:path>`,
})
export class TdesignTeaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
