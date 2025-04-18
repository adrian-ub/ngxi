import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobitechIcon],svg[arcticons-mobitech-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.666 35.653V19.246m4.399-3.794c13.307 3.12 13.396 11.93 13.365 20.201m1.388-13.366c2.245-3.424 7.12-7.17 11.168-7.23m4.228 4.011l.09 16.585"></svg:path><svg:circle cx="6.84" cy="14.688" r="2.341" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="41.16" cy="14.708" r="2.341" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMobitechIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
