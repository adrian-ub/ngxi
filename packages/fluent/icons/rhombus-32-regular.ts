import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRhombus32RegularIcon],svg[fluent-rhombus-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.506 7.043A3.25 3.25 0 0 1 10.524 5h17.153c2.3 0 3.871 2.322 3.017 4.457l-6.2 15.5A3.25 3.25 0 0 1 21.477 27H4.324c-2.3 0-3.872-2.322-3.018-4.457zM10.524 7a1.25 1.25 0 0 0-1.161.786l-6.2 15.5A1.25 1.25 0 0 0 4.323 25h17.154c.511 0 .97-.311 1.16-.786l6.2-15.5A1.25 1.25 0 0 0 27.678 7z"></svg:path>`,
})
export class FluentRhombus32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
