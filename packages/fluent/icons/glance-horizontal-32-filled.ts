import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGlanceHorizontal32FilledIcon],svg[fluent-glance-horizontal-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v5.5A3.25 3.25 0 0 0 6.25 15h8.5A3.25 3.25 0 0 0 18 11.75v-5.5A3.25 3.25 0 0 0 14.75 3zm11 15A3.25 3.25 0 0 0 14 21.25v4.5A3.25 3.25 0 0 0 17.25 29h8.5A3.25 3.25 0 0 0 29 25.75v-4.5A3.25 3.25 0 0 0 25.75 18zm7-15A3.25 3.25 0 0 0 21 6.25v5.5A3.25 3.25 0 0 0 24.25 15h1.5A3.25 3.25 0 0 0 29 11.75v-5.5A3.25 3.25 0 0 0 25.75 3zm-18 15A3.25 3.25 0 0 0 3 21.25v4.5A3.25 3.25 0 0 0 6.25 29h1.5A3.25 3.25 0 0 0 11 25.75v-4.5A3.25 3.25 0 0 0 7.75 18z"></svg:path>`,
})
export class FluentGlanceHorizontal32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
