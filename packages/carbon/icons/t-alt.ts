import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTAltIcon],svg[carbon-t-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 11h3v12h2V11h3V9H8v2z" fill="currentColor"></svg:path><svg:path d="M24 9h-2V7h-2v2h-2v2h2v6l1 1l1-1v-6h2V9z" fill="currentColor"></svg:path>`,
})
export class CarbonTAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
