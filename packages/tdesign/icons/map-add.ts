import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapAddIcon],svg[tdesign-map-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.886 1.859l8.086 3.537L22 2.382V11h-2V5.618l-3 1.5V11h-2V7.154L9 4.53v10.853l2.34 1.17l-.895 1.789l-2.401-1.201L2 20.766V5.98zM7 15.434V4.92l-3 2.1v10.213zM19 12v4h4v2h-4v4h-2v-4h-4v-2h4v-4z"></svg:path>`,
})
export class TdesignMapAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
