import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEnterpriseOffIcon],svg[material-symbols-light-enterprise-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.266l-12-12v-.65q0-.691.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616zM10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zm10.808 15.223L18.585 20H4.615q-.69 0-1.152-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H7v1.416L2.546 3.962l.708-.708l18.262 18.262z"></svg:path>`,
})
export class MaterialSymbolsLightEnterpriseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
