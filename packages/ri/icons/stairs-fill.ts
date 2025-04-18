import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStairsFillIcon],svg[ri-stairs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h6v18H3v-6h4v-4h4V7h4z"></svg:path>`,
})
export class RiStairsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
