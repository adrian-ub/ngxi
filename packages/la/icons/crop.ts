import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCropIcon],svg[la-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v4H4v2h4v14h14v4h2v-4h4v-2H11.437L22 11.437V21h2V9.437l3.719-3.718L26.28 4.28L22.563 8H11v2h9.563L10 20.563V4z"></svg:path>`,
})
export class LaCropIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
