import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneArithmeticButtonsIcon],svg[icon-park-twotone-arithmetic-buttons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTArithmeticButtons0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"></svg:path><svg:path stroke-linejoin="round" d="M10 14h8m-8 0h8m-7 23l6-6m-3-13v-8m3 27l-6-6m19-17h8m-8 17h8m-8 6h8"></svg:path><svg:path d="M24 4v40M4 24h40"></svg:path><svg:path stroke-linejoin="round" d="M30 4H18m12 40H18M4 28v-8m40 8v-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTArithmeticButtons0)"></svg:path>`,
})
export class IconParkTwotoneArithmeticButtonsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
