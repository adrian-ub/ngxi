import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psBoiledEggIcon],svg[ps-boiled-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 256q0 49 29.5 89t74.5 54q-5 27-16 48.5T67 469H45q-9 0-15 6t-6 16q0 9 6 15t15 6h214q9 0 15-6t6-15q0-10-6-16t-15-6h-22q-13 0-24-21.5T197 399q48-14 76-58t28-106v-32q0-62-40-126Q214 0 152 0T43 77Q3 141 3 203zm175 213h-49q17-30 21-64h4q10 41 24 64m-26-106q-45 0-76-31t-31-76h212q-4 45-30 76t-75 31M45 203q0-50 34-105q36-55 73-55t73 55q34 55 34 105v10H45z"></svg:path>`,
})
export class PsBoiledEggIcon {
  readonly viewBox = input("0 0 304 512")
  readonly width = input("0.6em")
  readonly height = input("1em")
}
