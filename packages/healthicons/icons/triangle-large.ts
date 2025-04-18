import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleLargeIcon],svg[healthicons-triangle-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 8c.379 0 .725.18.894.466l18 30.315a.73.73 0 0 1-.043.82c-.183.248-.504.399-.851.399H6c-.347 0-.668-.151-.85-.4a.73.73 0 0 1-.044-.819l18-30.315C23.275 8.18 23.62 8 24 8"></svg:path>`,
})
export class HealthiconsTriangleLargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
