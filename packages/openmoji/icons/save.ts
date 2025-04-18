import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSaveIcon],svg[openmoji-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M58.231 54.809H14.125c-.892 0-1.622-.73-1.622-1.623V43.181c0-.893.73-1.623 1.622-1.623h44.106c.893 0 1.623.73 1.623 1.623v10.005c0 .893-.73 1.623-1.623 1.623"></svg:path><svg:circle cx="19.017" cy="48.289" r="1.934" fill="#92D3F5"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M36.085 17.147v18.87m6.155-6.122l-6.14 6.14m-6.19-6.14l6.14 6.14m20.846 18.943h-41.82c-1.65 0-3-1.35-3-3v-7.576c0-1.65 1.35-3 3-3h41.82c1.65 0 3 1.35 3 3v7.576c0 1.65-1.35 3-3 3"></svg:path><svg:circle cx="19.017" cy="48.289" r="2"></svg:circle></svg:g>`,
})
export class OpenmojiSaveIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
