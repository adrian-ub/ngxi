import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwArrowsAltIcon],svg[uiw-arrows-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.163 10.762a.7.7 0 0 1 .008.99l-6.737 6.854l4.266-.001a.7.7 0 0 1 0 1.4h-6a.7.7 0 0 1-.7-.7v-6a.7.7 0 0 1 1.4 0l.001 4.354l6.772-6.888a.7.7 0 0 1 .99-.009M19.302 0a.7.7 0 0 1 .7.7v6a.7.7 0 0 1-1.4 0L18.6 2.346l-6.772 6.888a.7.7 0 0 1-.998-.981l6.737-6.854l-4.266.001a.7.7 0 0 1 0-1.4z"></svg:path>`,
})
export class UiwArrowsAltIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
