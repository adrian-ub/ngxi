import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaCircumflexIcon],svg[iwwa-circumflex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.419 27.287L20 11.162l.113.113l13.475 16.019a.847.847 0 0 0 1.18-.013a.83.83 0 0 0 .233-.587a.84.84 0 0 0-.238-.595L20.647 9.444a.8.8 0 0 0-.628-.225a.84.84 0 0 0-.67.23L5.22 26.118c-.295.313-.299.844.025 1.18a.846.846 0 0 0 1.174-.011"></svg:path>`,
})
export class IwwaCircumflexIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
