import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeAidKitIcon],svg[icomoon-free-aid-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4h-3V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v2H2C.9 4 0 4.9 0 6v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M6 2h4v2H6zm6 9H9v3H7v-3H4V9h3V6h2v3h3z"></svg:path>`,
})
export class IcomoonFreeAidKitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
