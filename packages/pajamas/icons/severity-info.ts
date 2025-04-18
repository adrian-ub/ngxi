import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSeverityInfoIcon],svg[pajamas-severity-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0M6.75 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M6 5.25a.75.75 0 0 0-.75.75v2.25a.75.75 0 1 0 1.5 0V6A.75.75 0 0 0 6 5.25"></svg:path>`,
})
export class PajamasSeverityInfoIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
