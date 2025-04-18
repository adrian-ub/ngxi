import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThumbDownSharpIcon],svg[material-symbols-light-thumb-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15v-3.17L5.304 4h11.042v11l-6.269 6.192l-.87-.869L10.335 15zm15.346 0V4H21v11z"></svg:path>`,
})
export class MaterialSymbolsLightThumbDownSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
