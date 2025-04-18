import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCredentialsIcon],svg[carbon-credentials-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2M14 6h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m-4 26h-8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm2 0v-2a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v2H8V4h16v24Z"></svg:path>`,
})
export class CarbonCredentialsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
