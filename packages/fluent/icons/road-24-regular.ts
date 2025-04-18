import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoad24RegularIcon],svg[fluent-road-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zm14.5 0a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zm-7.25 0a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zm-1.5 11a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-1.5 0zm0 4a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentRoad24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
