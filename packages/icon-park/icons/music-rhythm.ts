import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicRhythmIcon],svg[icon-park-music-rhythm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 42H10"></svg:path><svg:path d="M5 36H10"></svg:path><svg:path d="M5 30H10"></svg:path><svg:path d="M5 24H10"></svg:path><svg:path d="M16 42H21"></svg:path><svg:path d="M16 36H21"></svg:path><svg:path d="M16 30H21"></svg:path><svg:path d="M16 24H21"></svg:path><svg:path d="M16 18H21"></svg:path><svg:path d="M16 12H21"></svg:path><svg:path d="M16 6H21"></svg:path><svg:path d="M27 42H32"></svg:path><svg:path d="M38 42H43"></svg:path><svg:path d="M27 36H32"></svg:path><svg:path d="M38 36H43"></svg:path><svg:path d="M27 30H32"></svg:path><svg:path d="M38 30H43"></svg:path><svg:path d="M38 24H43"></svg:path><svg:path d="M38 18H43"></svg:path></svg:g>`,
})
export class IconParkMusicRhythmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
