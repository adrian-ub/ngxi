import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineReligionSymbolPeaceReligionPeaceWarCultureIcon],svg[streamline-religion-symbol-peace-religion-peace-war-culture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 .5v13m-5.07-2.43L7 6l5.07 5.07"></svg:path></svg:g>`,
})
export class StreamlineReligionSymbolPeaceReligionPeaceWarCultureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
