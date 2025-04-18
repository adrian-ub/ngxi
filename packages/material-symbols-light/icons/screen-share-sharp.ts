import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenShareSharpIcon],svg[material-symbols-light-screen-share-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 19.462v-1h20.46v1zm1.23-2v-13h18v13zm5.77-3.346h1v-2q0-.618.44-1.06q.442-.44 1.06-.44h2v1.307l1.807-1.807l-1.808-1.808v1.308h-2q-1.042 0-1.77.729q-.73.729-.73 1.77z"></svg:path>`,
})
export class MaterialSymbolsLightScreenShareSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
