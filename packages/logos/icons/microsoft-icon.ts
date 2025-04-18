import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMicrosoftIconIcon],svg[logos-microsoft-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F1511B" d="M121.666 121.666H0V0h121.666z"></svg:path><svg:path fill="#80CC28" d="M256 121.666H134.335V0H256z"></svg:path><svg:path fill="#00ADEF" d="M121.663 256.002H0V134.336h121.663z"></svg:path><svg:path fill="#FBBC09" d="M256 256.002H134.335V134.336H256z"></svg:path>`,
})
export class LogosMicrosoftIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
