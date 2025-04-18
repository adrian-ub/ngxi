import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTaxiDuotoneIcon],svg[ph-taxi-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 176h40v24a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8ZM32 200a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8v-24H32ZM194.3 60a8 8 0 0 0-6.94-4H68.64a8 8 0 0 0-6.94 4L32 112h192Z" opacity=".2"></svg:path><svg:path d="M240 104h-11.36l-27.39-47.94A16 16 0 0 0 187.36 48h-21.94l-12-29.94A15.93 15.93 0 0 0 138.58 8h-21.16a15.93 15.93 0 0 0-14.86 10.06L90.58 48H68.64a16 16 0 0 0-13.89 8.06L27.36 104H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M117.42 24h21.16l9.6 24h-40.36ZM68.64 64h118.72l22.85 40H45.79ZM64 200H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 144a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhTaxiDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
