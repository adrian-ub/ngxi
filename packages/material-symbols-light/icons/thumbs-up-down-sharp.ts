import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThumbsUpDownSharpIcon],svg[material-symbols-light-thumbs-up-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 13.27V5.4L5.4.5l.706.706l-.921 4.063H11.5v2.037l-2.59 5.963zM18.6 23.5l-.706-.706l.922-4.063H12.5v-2.037l2.59-5.963h8.41V18.6z"></svg:path>`,
})
export class MaterialSymbolsLightThumbsUpDownSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
