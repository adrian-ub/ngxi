import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThumbsUpDownOutlineSharpIcon],svg[material-symbols-light-thumbs-up-down-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 13.27V5.4L5.4.5l.706.706l-.921 4.063H11.5v2.037l-2.59 5.963zm1-1h6.758L10.5 7.034v-.766H3.966l.83-3.738L1.5 5.816zM18.6 23.5l-.706-.706l.922-4.063H12.5v-2.037l2.59-5.963h8.41V18.6zm.604-2.03l3.296-3.285V11.73h-6.758L13.5 16.966v.765h6.535zM1.5 12.27V5.815zm21 5.915V11.73z"></svg:path>`,
})
export class MaterialSymbolsLightThumbsUpDownOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
