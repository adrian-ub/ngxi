import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSellaIcon],svg[arcticons-sella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.626 27.902c.63.755 1.384 1.133 2.517 1.133h1.51c1.385 0 2.518-1.133 2.518-2.518S15.038 24 13.653 24h-1.636C10.633 24 9.5 22.867 9.5 21.483s1.133-2.517 2.517-2.517h1.51c1.133 0 1.888.251 2.518 1.133m7.251 7.677c-.377.755-1.258 1.259-2.14 1.259a2.525 2.525 0 0 1-2.517-2.518v-1.636c0-1.384 1.133-2.517 2.518-2.517s2.517 1.133 2.517 2.517v.881h-5.035m7.504-6.796v8.81c0 .755.503 1.258 1.258 1.258h.378m2.316-10.068v8.81c0 .755.503 1.258 1.259 1.258h.377m6.769-2.517c0 1.385-1.133 2.517-2.517 2.517s-2.517-1.132-2.517-2.517v-1.636c0-1.384 1.132-2.517 2.517-2.517S38.5 23.497 38.5 24.88m0 4.155v-6.797"></svg:path>`,
})
export class ArcticonsSellaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
