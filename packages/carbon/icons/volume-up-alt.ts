import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeUpAltIcon],svg[carbon-volume-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 15h-4v-4h-2v4h-4v2h4v4h2v-4h4zM18 30a1 1 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1M4 20h6a1.2 1.2 0 0 1 .794.297L17 26.568V5.432l-6.206 6.271A1.2 1.2 0 0 1 10 12H4z"></svg:path>`,
})
export class CarbonVolumeUpAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
