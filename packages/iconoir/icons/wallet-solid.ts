import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWalletSolidIcon],svg[iconoir-wallet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path fill-rule="evenodd" d="M5 6.25A2.75 2.75 0 0 0 2.25 9v9A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9A2.75 2.75 0 0 0 19 6.25zm11.5 6a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5" clip-rule="evenodd"></svg:path><svg:path d="M16.485 3.069A2 2 0 0 1 19 5H9z"></svg:path></svg:g>`,
})
export class IconoirWalletSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
