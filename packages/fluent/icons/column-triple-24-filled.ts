import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColumnTriple24FilledIcon],svg[fluent-column-triple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 21A2.5 2.5 0 0 1 2 18.5v-13A2.5 2.5 0 0 1 4.5 3h1A2.5 2.5 0 0 1 8 5.5v13A2.5 2.5 0 0 1 5.5 21zm7 0A2.5 2.5 0 0 1 9 18.5v-13A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5v13a2.5 2.5 0 0 1-2.5 2.5zm4.5-2.5a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 3h-1A2.5 2.5 0 0 0 16 5.5z"></svg:path>`,
})
export class FluentColumnTriple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
