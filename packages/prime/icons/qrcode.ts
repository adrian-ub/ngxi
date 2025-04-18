import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeQrcodeIcon],svg[prime-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.38 3.88v7h7v-7Zm5.5 5.5h-4v-4h4Zm-14 1.5h7v-7h-7Zm1.5-5.5h4v4h-4Zm-1.5 14h7v-7h-7Zm1.5-5.5h4v4h-4Zm7-1.5h1.75v1.75h-1.75zm3.5 0h1.75v1.75h-1.75zm-1.75 1.75h1.75v1.75h-1.75zm3.5 0h1.75v1.75h-1.75zm-5.25 1.75h1.75v1.75h-1.75zm3.5 0h1.75v1.75h-1.75zm-1.75 1.75h1.75v1.75h-1.75zm3.5 0h1.75v1.75h-1.75z"></svg:path>`,
})
export class PrimeQrcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
