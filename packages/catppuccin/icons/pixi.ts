import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPixiIcon],svg[catppuccin-pixi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m6.702 5.889l5.046 6.426"></svg:path><svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="m3.71 3.786l-.396-2.149l2.03.843L7.39 1.5l-.275 2.149l1.772 1.667l-2.392.24l-.808 2.132L4.569 5.78l-2.288-.24Zm4.995 6.005s-.656.559-1.192.073s.145-1.474.633-1.945s1.54-1.07 2.015-.594c.696.7-.268 1.382-.268 1.382"></svg:path><svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M10.31 11.076s-1.132 1.025-1.817.447c-.684-.578.185-1.752.81-2.312c.623-.56 1.928-1.272 2.487-.665s-.806 1.956-.806 1.956"></svg:path><svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M11.93 13.037s-1.508 1.326-2.33.621s.221-2.136.971-2.818c.75-.683 2.318-1.55 2.991-.81s-.979 2.331-.979 2.331"></svg:path><svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m11.785 12.358l1.682 2.142"></svg:path>`,
})
export class CatppuccinPixiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
