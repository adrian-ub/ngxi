import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHeadwearIcon],svg[icon-park-solid-headwear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12.417 43C10.095 40.068 8 35.779 8 31c0-8.837 7.163-16 16-16s16 7.163 16 16c0 4.779-2.095 9.068-4.417 12"></svg:path><svg:path fill="currentColor" d="M34 13.5L43 5l-3 12l-5 1zm-20 0L5 5l3 12l5 1z"></svg:path></svg:g>`,
})
export class IconParkSolidHeadwearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
