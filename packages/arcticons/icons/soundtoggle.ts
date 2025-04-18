import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoundtoggleIcon],svg[arcticons-soundtoggle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.557 42.5L15.724 28.666H6.39v-9.332h9.333L29.557 5.5Zm3.85-8.591a10.086 10.086 0 0 0 0-19.818z"></svg:path>`,
})
export class ArcticonsSoundtoggleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
