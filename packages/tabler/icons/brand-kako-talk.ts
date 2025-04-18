import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandKakoTalkIcon],svg[tabler-brand-kako-talk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 8v7m4-5l-2 2.5l2 2.5"></svg:path><svg:path d="M12 4c4.97 0 9 3.358 9 7.5S16.97 19 12 19c-.67 0-1.323-.061-1.95-.177L7 21l.592-2.962C4.851 16.754 3 14.308 3 11.5C3 7.358 7.03 4 12 4"></svg:path></svg:g>`,
})
export class TablerBrandKakoTalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
