import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDownRightArrowIcon],svg[openmoji-down-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F3F3F" d="m57.466 34.702l.897 24.229l-24.229-.897l.206-5.558L48.5 53L12.607 17.108l3.933-3.933l35.892 35.893l-.524-14.16z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m57.466 34.702l.897 24.229l-24.229-.897l.206-5.558L48.5 53L12.607 17.108l3.933-3.933l35.892 35.893l-.524-14.16z"></svg:path>`,
})
export class OpenmojiDownRightArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
