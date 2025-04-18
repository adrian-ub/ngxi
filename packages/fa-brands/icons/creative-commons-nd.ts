import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsCreativeCommonsNdIcon],svg[fa-brands-creative-commons-nd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256C0 123.1 104.7 8 247.6 8m.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8c103.2 0 202.8-81.1 202.8-202.8c.1-113.8-90.2-203.3-202.8-203.3m94 144.3v42.5H162.1V197zm0 79.8v42.5H162.1v-42.5z"></svg:path>`,
})
export class FaBrandsCreativeCommonsNdIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
