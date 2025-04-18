import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAButtonBloodTypeIcon],svg[openmoji-a-button-blood-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:path d="M59.035 60.137h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" d="m45.429 46.313l-9.429-22l-9.429 22m3.143-5.267h12.572"></svg:path></svg:g><svg:path fill="#d22f27" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2"><svg:path d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" d="m45.429 46.176l-9.429-22l-9.429 22m3.143-5.268h12.572"></svg:path></svg:g>`,
})
export class OpenmojiAButtonBloodTypeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
