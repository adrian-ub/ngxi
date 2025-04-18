import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsManyverseIcon],svg[arcticons-manyverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:circle cx="12.708" cy="34.087" r="2.208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12.708 31.88l.02-19.105c.232-1.246 2.068-1.51 2.623-.222L22.7 33.796a1.4 1.4 0 0 0 1.301 1.018a1.4 1.4 0 0 0 1.3-1.018l7.349-21.243c.555-1.289 2.391-1.024 2.623.222l.02 19.105"></svg:path><svg:circle cx="35.292" cy="34.087" r="2.208"></svg:circle></svg:g>`,
})
export class ArcticonsManyverseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
