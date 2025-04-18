import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoad20RegularIcon],svg[fluent-road-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zm11 0a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zm-5.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zm-1 9a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0zm0 3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0z"></svg:path>`,
})
export class FluentRoad20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
