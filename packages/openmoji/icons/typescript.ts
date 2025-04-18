import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTypescriptIcon],svg[openmoji-typescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round"><svg:path stroke-width="2" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" stroke-width="4.453" d="M53.82 41.34c-.456-1.777-2.429-3.11-4.793-3.11c-2.703 0-4.893 1.743-4.893 3.896c0 2.151 2.191 3.896 4.893 3.896l-.1.013c2.703 0 4.893 1.745 4.893 3.896c0 2.153-2.191 3.896-4.893 3.896c-2.364 0-4.337-1.336-4.793-3.112" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" stroke-width="4.456" d="M34.096 38.23v15.596M29.64 38.23h8.912" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class OpenmojiTypescriptIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
