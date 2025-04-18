import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSAltIcon],svg[carbon-s-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24 9h-2V7h-2v2h-2v2h2v6h2v-6h2V9z" fill="currentColor"></svg:path><svg:path d="M14 23H8v-2h6v-4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonSAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
