import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEthereumIcon],svg[hugeicons-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 12l-5.76 2.579c-.611.28-.917.421-1.24.421s-.629-.14-1.24-.421L5 12m14 0c0-.532-.305-1-.917-1.936L14.58 4.696C13.406 2.9 12.82 2 12 2s-1.406.899-2.58 2.696l-3.503 5.368C5.306 11 5 11.468 5 12m14 0c0 .532-.305 1-.917 1.936l-3.503 5.368C13.406 21.1 12.82 22 12 22s-1.406-.899-2.58-2.696l-3.503-5.368C5.306 13 5 12.532 5 12" color="currentColor"></svg:path>`,
})
export class HugeiconsEthereumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
