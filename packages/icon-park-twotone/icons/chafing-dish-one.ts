import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneChafingDishOneIcon],svg[icon-park-twotone-chafing-dish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTChafingDishOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M6 18h36v6a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6z"></svg:path><svg:path d="M40 42H8m5 0l3-12m19 12l-3-12m-2-12L27 4h-6l-3 14m18-7h4M8 11h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTChafingDishOne0)"></svg:path>`,
})
export class IconParkTwotoneChafingDishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
