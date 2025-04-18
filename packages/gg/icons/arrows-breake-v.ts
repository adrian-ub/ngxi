import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsBreakeVIcon],svg[gg-arrows-breake-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.243 5.243l-1.414 1.414L13 4.828v4.415h4v2H7v-2h4V4.828L9.172 6.657L7.757 5.243L12 1zM7 15.253v-2h10v2h-4v4.414l1.828-1.829l1.415 1.415L12 23.495l-4.243-4.242l1.415-1.415L11 19.668v-4.414z"></svg:path>`,
})
export class GgArrowsBreakeVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
