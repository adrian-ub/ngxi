import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMoveUpIcon],svg[gg-move-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 19.071h-2v-8h2zm-8 0H7v-8h2z"></svg:path><svg:path d="M13 19.071h-2v-10H7.965l4-4.071l4 4.071H13z"></svg:path></svg:g>`,
})
export class GgMoveUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
