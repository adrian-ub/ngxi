import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNewspaperSharpIcon],svg[material-symbols-light-newspaper-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 20.5V4.212l1.175 1.175l1.65-1.675L7 5.387l1.675-1.675l1.65 1.675L12 3.712l1.675 1.675l1.65-1.675L17 5.387l1.675-1.675l1.65 1.675L21.5 4.212V20.5zm1-1h8v-7h-8zm9 0h8v-3h-8zm0-4h8v-3h-8zm-9-4h17V7.308h-17z"></svg:path>`,
})
export class MaterialSymbolsLightNewspaperSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
