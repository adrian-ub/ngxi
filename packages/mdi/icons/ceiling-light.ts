import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCeilingLightIcon],svg[mdi-ceiling-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9h3V4h2v5h3l4 8H4zm6 9a2 2 0 0 1-2 2a2 2 0 0 1-2-2z"></svg:path>`,
})
export class MdiCeilingLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
