import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsViacoinIcon],svg[fa-brands-viacoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 32h-64l-80.7 192h-94.5L64 32H0l48 112H0v48h68.5l13.8 32H0v48h102.8L192 480l89.2-208H384v-48h-82.3l13.8-32H384v-48h-48zM192 336l-27-64h54z"></svg:path>`,
})
export class FaBrandsViacoinIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
