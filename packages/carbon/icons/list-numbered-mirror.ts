import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonListNumberedMirrorIcon],svg[carbon-list-numbered-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28h-6v-4c0-1.1.9-2 2-2h2v-2h-4v-2h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2v2h4zM2 22h14v2H2zm24-10V4h-2v1h-2v2h2v5h-2v2h6v-2zM2 8h14v2H2z"></svg:path>`,
})
export class CarbonListNumberedMirrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
