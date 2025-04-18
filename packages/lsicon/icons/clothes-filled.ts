import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconClothesFilledIcon],svg[lsicon-clothes-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.76 2H6v.473c.005.01.026.059.102.147c.103.12.265.263.473.4c.422.277.952.48 1.425.48s1.004-.203 1.425-.48c.208-.137.37-.28.474-.4c.075-.088.096-.137.101-.147V2h2.24l2.312 2.89l-1.237 4.327l-1.815-.908V14h-7V8.309l-1.815.908l-1.237-4.328z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconClothesFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
