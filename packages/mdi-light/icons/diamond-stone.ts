import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightDiamondStoneIcon],svg[mdi-light-diamond-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h11l3.9 5.57L11.5 22L2.1 8.57zm4.16 1l-1.7 4h6.08l-1.7-4zM8.33 9l3.17 9.76L14.67 9zM3.72 8h3.66l1.7-4H6.5zm-.1 1l6.82 9.75L7.28 9zm15.66-1L16.5 4h-2.58l1.7 4zm.1 1h-3.66l-3.16 9.75z"></svg:path>`,
})
export class MdiLightDiamondStoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
