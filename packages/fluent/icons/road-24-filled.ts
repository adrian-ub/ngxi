import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoad24FilledIcon],svg[fluent-road-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0zm14 0a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0zm-7 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-2 10.5a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0zm0 4.5a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentRoad24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
