import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTemplateIcon],svg[jam-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12h5a1 1 0 0 0 1-1V6H6zm-2 0V6H2v5a1 1 0 0 0 1 1zm8-9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1h10zM3 0h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamTemplateIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
