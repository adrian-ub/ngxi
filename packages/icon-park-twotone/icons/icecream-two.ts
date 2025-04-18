import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneIcecreamTwoIcon],svg[icon-park-twotone-icecream-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTIcecreamTwo0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M15.34 22.5L21 37l3 6l3-6l5.66-14.5"></svg:path><svg:path d="M19 32h10"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M24 3c-6 0-8 6-8 6s-6 2-6 7s5 7 5 7s3.5-2 9-2s9 2 9 2s5-2 5-7s-6-7-6-7s-2-6-8-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTIcecreamTwo0)"></svg:path>`,
})
export class IconParkTwotoneIcecreamTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
