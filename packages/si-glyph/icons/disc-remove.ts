import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDiscRemoveIcon],svg[si-glyph-disc-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M13 14h3.938v1.969H13z"></svg:path><svg:path d="M16.958 7.969c0-4.413-3.573-7.906-7.979-7.906S1 3.556 1 7.969c0 4.412 3.572 7.989 7.979 7.989a7.9 7.9 0 0 0 2.992-.601v-2.402h3.314c.941-1.319 1.673-3.255 1.673-4.986M4.633 13.193l-.868-.869l1.518-1.518l.868.869zM9 11.125c-1.721 0-3.115-1.406-3.115-3.14S7.28 4.843 9 4.843c1.719 0 3.115 1.406 3.115 3.142c0 1.734-1.396 3.14-3.115 3.14m3.612-5.848l-.869-.869l1.518-1.518l.869.869z"></svg:path><svg:path d="M8.988 6.022a1.977 1.977 0 1 0 0 3.953a1.98 1.98 0 0 0 1.979-1.976a1.98 1.98 0 0 0-1.979-1.977"></svg:path></svg:g>`,
})
export class SiGlyphDiscRemoveIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
