import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSquareDashed1Icon],svg[si-glyph-square-dashed-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.048 1.976h1.993v1.988h.907v-2.92h-2.9zM.923 3.995V1.976h2.028v-.99H.027v3.009zm2.028 12.022H.964v-1.95H.027v2.928h2.924zM15 6v2.01h.989V6zm0 4v1.96h.982V10zM9 1v.965h1.984V1zM5 1v.973h1.995V1zm4 15v.973h1.958V16zm-4 0v.993h1.987V16zM0 6v1.99h.98V6zm0 4v1.961h.954V10zm15.006 4v2.073H13v.945h3.003V14z"></svg:path>`,
})
export class SiGlyphSquareDashed1Icon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
