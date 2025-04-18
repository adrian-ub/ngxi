import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoctor48FilledIcon],svg[fluent-doctor-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 6A2.25 2.25 0 0 0 16 8.25V16H8.25A2.25 2.25 0 0 0 6 18.25v11.5A2.25 2.25 0 0 0 8.25 32H16v7.75A2.25 2.25 0 0 0 18.25 42h11.5A2.25 2.25 0 0 0 32 39.75V32h7.75A2.25 2.25 0 0 0 42 29.75v-11.5A2.25 2.25 0 0 0 39.75 16H32V8.25A2.25 2.25 0 0 0 29.75 6z"></svg:path>`,
})
export class FluentDoctor48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
