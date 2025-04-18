import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlayDisabledIcon],svg[material-symbols-light-play-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.258 13.177L9 6.919v-.111L17.154 12zm2.415 6.654l-4.98-4.992L9 17.192v-6.046L4.13 6.277l.709-.708l13.553 13.554z"></svg:path>`,
})
export class MaterialSymbolsLightPlayDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
