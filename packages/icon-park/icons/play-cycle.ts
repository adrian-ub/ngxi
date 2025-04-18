import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayCycleIcon],svg[icon-park-play-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 25C4 18.3502 9.39624 13 16 13H44"></svg:path><svg:path d="M38 7L44 13L38 19"></svg:path><svg:path d="M44 23C44 29.6498 38.6038 35 32 35H4"></svg:path><svg:path d="M10 41L4 35L10 29"></svg:path></svg:g>`,
})
export class IconParkPlayCycleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
