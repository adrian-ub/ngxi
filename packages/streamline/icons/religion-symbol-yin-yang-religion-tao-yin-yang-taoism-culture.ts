import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionSymbolYinYangReligionTaoYinYangTaoismCultureIcon],svg[streamline-religion-symbol-yin-yang-religion-tao-yin-yang-taoism-culture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 .5S2.93 4.09 7 7c3.5 2.5 0 6.5 0 6.5"></svg:path><svg:circle cx="9" cy="4.5" r="1"></svg:circle><svg:circle cx="5" cy="9.5" r="1"></svg:circle></svg:g>`,
})
export class StreamlineReligionSymbolYinYangReligionTaoYinYangTaoismCultureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
