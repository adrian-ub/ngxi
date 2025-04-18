import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenShareOutlineSharpIcon],svg[material-symbols-light-screen-share-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 19.462v-1h20.46v1zm1.23-2v-13h18v13zm1-1h16v-11H4zm0 0v-11zm4.77-2.346h1v-2q0-.618.44-1.06q.442-.44 1.06-.44h2v1.307l1.807-1.807l-1.808-1.808v1.308h-2q-1.042 0-1.77.729q-.73.729-.73 1.77z"></svg:path>`,
})
export class MaterialSymbolsLightScreenShareOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
