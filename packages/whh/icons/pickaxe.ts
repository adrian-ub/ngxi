import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPickaxeIcon],svg[whh-pickaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1014 963l-51 51q-10 10-24.5 10t-25.5-10L169 269Q67 398 32 576Q0 544 0 480q0-158 95-285l-21-21q-10-10-10-24.5T74 124l50-50q11-10 25.5-10T174 74l21 20Q323 0 480 0q64 0 96 32q-178 35-307 137l745 744q10 11 10 25.5t-10 24.5"></svg:path>`,
})
export class WhhPickaxeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
