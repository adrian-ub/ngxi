import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBroccoliIcon],svg[arcticons-emoji-broccoli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="arcticonsEmojiBroccoli0" fill="none" stroke="currentColor" d="M17.144 31.062q-.465.053-.946.053c-4.534 0-8.215-3.657-8.215-8.168a8.15 8.15 0 0 1 3.359-6.59c.651-.476 1.07-1.192 1.267-1.975C13.893 9.278 18.538 5.5 24.064 5.5c5.61 0 10.317 3.903 11.508 9.133c.173.759.62 1.41 1.24 1.883a8.1 8.1 0 0 1 3.205 6.46c0 4.496-3.666 8.14-8.187 8.14q-.178 0-.355-.008"></svg:path><svg:path id="arcticonsEmojiBroccoli1" fill="none" stroke="currentColor" d="M31.474 31.115s-.15 0-.405-.02h-.029m-13.56-.058c-.57.078-.955.078-.955.078"></svg:path></svg:defs><svg:use href="#arcticonsEmojiBroccoli0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsEmojiBroccoli0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsEmojiBroccoli1" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.525 31.115s4.272 0 5.695-2.846"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.04 31.094s-2.413 3.58-2.413 5.714v4.24c0 .802-.65 1.452-1.453 1.452h-5.636c-.803 0-1.453-.65-1.453-1.453v-4.24c0-2.134-2.05-5.89-2.05-5.89"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.474 31.115s-4.27 0-5.695-2.846"></svg:path><svg:use href="#arcticonsEmojiBroccoli0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:use href="#arcticonsEmojiBroccoli1" stroke-linecap="round" stroke-linejoin="round"></svg:use>`,
})
export class ArcticonsEmojiBroccoliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
