import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextFormatIcon],svg[material-symbols-light-text-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 18.539v-1h13v1zm2.112-3.77l3.907-10.308h1L16.35 14.77h-1.016l-1.026-2.838H9.666L8.627 14.77zm2.372-3.708h3.993l-1.908-5.28h-.1z"></svg:path>`,
})
export class MaterialSymbolsLightTextFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
