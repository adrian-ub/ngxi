import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextUpIcon],svg[material-symbols-light-text-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.289 18.385v-1h8.923v1zm3.961-3.808V7.531l-2.1 2.1l-.708-.708l3.308-3.307l3.308 3.307l-.708.708l-2.1-2.1v7.046zm-11.461 0l3.515-9h.638l3.554 9h-.973l-1.03-2.608H5.765l-1.031 2.608zm2.272-3.408h3.123L7.655 7.15h-.1z"></svg:path>`,
})
export class MaterialSymbolsLightTextUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
