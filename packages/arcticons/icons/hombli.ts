import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHombliIcon],svg[arcticons-hombli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="38.618" cy="20.892" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.618 23.052v4.673m-2.858-7.054v6.173a.88.88 0 0 0 .88.881h.265m-6.419-2.909c0-.974.79-1.764 1.764-1.764h0c.974 0 1.763.79 1.763 1.764v1.146c0 .974-.79 1.763-1.763 1.763h0c-.974 0-1.764-.79-1.764-1.763m0 1.763v-7.054m-15.443 4.145a1.763 1.763 0 1 1 3.527 0v1.146a1.763 1.763 0 1 1-3.527 0zm-5.661-4.145v7.054m0-2.909c0-.974.79-1.764 1.763-1.764h0c.974 0 1.764.79 1.764 1.764v2.91m-3.527-.001h.882M8.5 20.671h.882m3.527 7.054h.881m6.945-2.909c0-.974.79-1.764 1.764-1.764h0c.974 0 1.763.79 1.763 1.764v2.91m-3.527-4.674v4.673m3.527-2.909c0-.974.79-1.764 1.764-1.764h0c.974 0 1.763.79 1.763 1.764v2.91m-7.054-.001h.882m2.669 0h.882m-5.314-4.673h.881m7.102 4.673h.882m.886-7.054h.881m4.391 0h.882m1.988 2.381h.882m-.011 4.673h.882"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path>`,
})
export class ArcticonsHombliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
