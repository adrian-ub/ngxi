import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyBottleIcon],svg[icon-park-baby-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 20H12V44H36V20Z"></svg:path><svg:path d="M26 36H36"></svg:path><svg:path d="M26 28H36"></svg:path><svg:path d="M8 20H40"></svg:path><svg:path d="M12 14H20.4V7.6C20.4 6.39815 21.6 4 24 4C26.4 4 27.6 6.39815 27.6 7.6V14H36"></svg:path></svg:g>`,
})
export class IconParkBabyBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
