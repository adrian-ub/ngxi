import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPentagon48FilledIcon],svg[fluent-pentagon-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.502 4.313a4.25 4.25 0 0 1 5 0l15.75 11.456a4.25 4.25 0 0 1 1.543 4.75l-6.018 18.54a4.25 4.25 0 0 1-4.042 2.938H14.268a4.25 4.25 0 0 1-4.042-2.938l-6.018-18.54a4.25 4.25 0 0 1 1.542-4.75z"></svg:path>`,
})
export class FluentPentagon48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
