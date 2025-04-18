import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDogIcon],svg[si-glyph-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.348 6.007c-.026 0-.058.014-.086.017l.031-.03L.025 3.965l-.014.597l1.5 2.46c-.277.341-.473.706-.473.988v4.908H3v-1.655l2.98-1.334h3.019l.667 2.989h1.252v-5.59l-1.007-1.32zm10.404-2.384l-.416-1.385l-2.655 2.622l1.329 1.383l2.81.604l1.192-.872z"></svg:path>`,
})
export class SiGlyphDogIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
