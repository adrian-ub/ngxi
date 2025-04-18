import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAdd32LightIcon],svg[fluent-add-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3.5a.5.5 0 0 0-1 0v12h-12a.5.5 0 0 0 0 1h12v12a.5.5 0 0 0 1 0v-12h12a.5.5 0 0 0 0-1h-12z"></svg:path>`,
})
export class FluentAdd32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
