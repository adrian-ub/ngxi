import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDnsSharpIcon],svg[material-symbols-light-dns-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.498 9.116q.416 0 .709-.291q.293-.292.293-.707q0-.416-.291-.71t-.707-.293t-.709.291t-.293.707t.291.709t.707.294m0 8.769q.415 0 .709-.292t.293-.706t-.291-.709t-.707-.294t-.709.292t-.293.706t.291.71t.707.293M4 11.615v-7h16v7zm0 8.77v-7h16v7z"></svg:path>`,
})
export class MaterialSymbolsLightDnsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
