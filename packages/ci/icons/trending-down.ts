import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTrendingDownIcon],svg[ci-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 17l-5.846-5.937a5 5 0 0 0-.205-.203a2 2 0 0 0-2.667 0c-.047.042-.1.096-.205.203c-.105.106-.158.16-.205.202a2 2 0 0 1-2.667 0A5 5 0 0 1 8 11.062L4 7m16 10v-6m0 6h-6"></svg:path>`,
})
export class CiTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
