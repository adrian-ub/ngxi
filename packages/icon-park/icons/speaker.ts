import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSpeakerIcon],svg[icon-park-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 2H10C8.89543 2 8 2.89543 8 4V44C8 45.1046 8.89543 46 10 46H38C39.1046 46 40 45.1046 40 44V4C40 2.89543 39.1046 2 38 2Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 38C27.3137 38 30 35.3137 30 32C30 28.6863 27.3137 26 24 26C20.6863 26 18 28.6863 18 32C18 35.3137 20.6863 38 24 38Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 18C26.2091 18 28 16.2091 28 14C28 11.7909 26.2091 10 24 10C21.7909 10 20 11.7909 20 14C20 16.2091 21.7909 18 24 18Z"></svg:path></svg:g>`,
})
export class IconParkSpeakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
