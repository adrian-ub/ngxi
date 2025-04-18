import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneChafingDishIcon],svg[icon-park-twotone-chafing-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTChafingDish0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6"></svg:path><svg:path fill="#555" d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6c0 0-4 2-4 9s8 11 8 18s-4 9-4 9Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 20h2v8h-2M6 20H4v8h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTChafingDish0)"></svg:path>`,
})
export class IconParkTwotoneChafingDishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
