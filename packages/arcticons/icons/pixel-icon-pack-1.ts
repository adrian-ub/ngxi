import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixelIconPack1Icon],svg[arcticons-pixel-icon-pack-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.433 23.335v-7.697h3.285c2.123 0 3.848 1.726 3.848 3.848s-1.725 3.848-3.848 3.848zm0-.001l-6 6m0-19.696l6 6m6.272 6.271l4.251 4.252m-4.251-9.098l4.251-4.251"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.718 9.638h-9.285v28.724h6v-9.028h3.285c5.44 0 9.849-4.409 9.849-9.848s-4.41-9.848-9.849-9.848"></svg:path>`,
})
export class ArcticonsPixelIconPack1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
