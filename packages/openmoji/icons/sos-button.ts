import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSosButtonIcon],svg[openmoji-sos-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D22F27" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10"><svg:path stroke-width="2" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07c0-.53.434-.965.965-.965h46.07c.53 0 .965.434.965.965v46.07c0 .53-.434.965-.965.965z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.004" d="M36 42.01a4.29 4.29 0 0 1-4.291-4.291v-3.433A4.29 4.29 0 0 1 36 29.995v0a4.29 4.29 0 0 1 4.291 4.291v3.433A4.29 4.29 0 0 1 36 42.01m-9.79-9.62c-.352-1.367-1.871-2.396-3.692-2.396v0c-2.082 0-3.769 1.344-3.769 3.001s1.687 3.001 3.769 3.001l-.077.011c2.082 0 3.77 1.344 3.77 3.001s-1.688 3.001-3.77 3.001v0c-1.82 0-3.34-1.029-3.692-2.396M53.25 32.39c-.352-1.367-1.871-2.396-3.692-2.396v0c-2.082 0-3.769 1.344-3.769 3.001s1.687 3.001 3.769 3.001l-.077.011c2.082 0 3.77 1.344 3.77 3.001s-1.688 3.001-3.77 3.001v0c-1.82 0-3.34-1.029-3.692-2.396"></svg:path></svg:g>`,
})
export class OpenmojiSosButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
