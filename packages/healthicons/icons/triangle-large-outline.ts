import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleLargeOutlineIcon],svg[healthicons-triangle-large-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 8c.379 0 .725.18.894.466l18 30.315a.73.73 0 0 1-.043.82c-.183.248-.504.399-.851.399H6c-.347 0-.668-.151-.85-.4a.73.73 0 0 1-.044-.819l18-30.315C23.275 8.18 23.62 8 24 8m0 2.725L7.618 38.315h32.764z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleLargeOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
