import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneJewelryIcon],svg[icon-park-twotone-jewelry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTJewelry0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#555"></svg:circle><svg:path fill="#555" d="M20 24c0-6.364 2.628-8.646 4-9c1.22.177 4 2.212 4 9s-2.78 9-4 9c-1.372-.177-4-2.636-4-9Z"></svg:path><svg:path d="M20 23c-1.554-1.538-6.382-1.16-8-1c-.485 1.762.352 5.492 2.293 7.414C16.72 31.817 18.661 33 24 33m4-10c1.436-1.533 5.504-1.16 7-1c.3 1.597.14 5.188-2.372 7.87C30.115 32.555 25.5 33 24 33"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTJewelry0)"></svg:path>`,
})
export class IconParkTwotoneJewelryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
