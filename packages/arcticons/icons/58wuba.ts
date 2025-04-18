import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons58wubaIcon],svg[arcticons-58wuba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M29.05 23.86c-2.87 0-5.217 2.465-5.217 5.479h0c0 3.013 2.348 5.479 5.217 5.479h3.392c2.87 0 5.218-2.466 5.218-5.48h0c0-3.013-2.348-5.479-5.218-5.479"></svg:path><svg:path d="M32.703 23.86c2.87 0 5.218-2.467 5.218-5.48h0c0-3.014-2.348-5.48-5.218-5.48H29.31c-2.87 0-5.218 2.466-5.218 5.48h0c0 3.013 2.348 5.48 5.218 5.48m-.26 0h3.653"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.287 31.335c1.25 1.1 2.292 1.54 5.001 1.54h.417c2.5 0 4.585-2.2 4.585-4.838h0c0-2.639-2.084-4.838-4.585-4.838H10.08v-7.696h10.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path>`,
})
export class Arcticons58wubaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
