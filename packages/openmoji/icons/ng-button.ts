import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNgButtonIcon],svg[openmoji-ng-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M59.035 59h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-miterlimit="10" d="M59.035 59.333h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 42.833v-15l10.714 15v-15m17.482 1.349a5.34 5.34 0 0 0-3.553-1.349h0a5.357 5.357 0 0 0-5.357 5.358v4.285a5.357 5.357 0 0 0 5.357 5.357h0A5.357 5.357 0 0 0 52 37.476v-2.17h-4.286"></svg:path></svg:g>`,
})
export class OpenmojiNgButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
