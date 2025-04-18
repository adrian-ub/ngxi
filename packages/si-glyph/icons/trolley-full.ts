import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphTrolleyFullIcon],svg[si-glyph-trolley-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 2)"><svg:path d="M5.8 9L3.451 0H.002l.025.938h2.438L5.065 10H15.97V9z"></svg:path><svg:path d="M7 6h1.958v1.955H7zm3 0h1.953v2H10zm0-3h1.938v1.899H10zm0-3h1.953v1.941H10zm3 6h1.953v1.906H13zm0-3h1.938v1.899H13zm0-3h1.953v1.941H13zM7 3h1.938v1.899H7zm0-3h1.953v1.941H7z"></svg:path><svg:ellipse cx="7.494" cy="10.471" rx="1.494" ry="1.471"></svg:ellipse><svg:circle cx="13.487" cy="10.487" r="1.487"></svg:circle></svg:g>`,
})
export class SiGlyphTrolleyFullIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
