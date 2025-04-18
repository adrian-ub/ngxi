import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneClothesGlovesIcon],svg[icon-park-twotone-clothes-gloves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTClothesGloves0"><svg:g fill="none"><svg:path fill="#555" d="M27 4H15c-3.771 0-5.657 0-6.828 1.172S7 8.229 7 12v32h28v-7s7 0 7-6v-8c0-6-7-6-7-6v-5c0-3.771 0-5.657-1.172-6.828S30.771 4 27 4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 27V17m0 0v-5c0-3.771 0-5.657-1.172-6.828S30.771 4 27 4H15c-3.771 0-5.657 0-6.828 1.172S7 8.229 7 12v32h28v-7s7 0 7-6v-8c0-6-7-6-7-6m-21 5V4m7 18V4m7 18V4M12 4h18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTClothesGloves0)"></svg:path>`,
})
export class IconParkTwotoneClothesGlovesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
