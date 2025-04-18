import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextRotationDownIcon],svg[icon-park-text-rotation-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M29 35L21 31.3333M29 13L21 16.6667M21 16.6667L17 18.5L5 24L17 29.5L21 31.3333M21 16.6667V31.3333"></svg:path><svg:path d="M37 6V42L43 36"></svg:path></svg:g>`,
})
export class IconParkTextRotationDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
