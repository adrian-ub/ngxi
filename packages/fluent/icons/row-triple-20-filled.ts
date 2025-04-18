import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRowTriple20FilledIcon],svg[fluent-row-triple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v1A1.5 1.5 0 0 0 4.5 6h11A1.5 1.5 0 0 0 17 4.5v-1A1.5 1.5 0 0 0 15.5 2zm0 6A1.5 1.5 0 0 0 3 9.5v1A1.5 1.5 0 0 0 4.5 12h11a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8zm0 6A1.5 1.5 0 0 0 3 15.5v1A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5z"></svg:path>`,
})
export class FluentRowTriple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
