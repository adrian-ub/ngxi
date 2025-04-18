import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMemeIcon],svg[arcticons-meme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M42.33 24H5.67M24 5.67v36.66m-12.48-5.928V30.24l3.12 6.24l3.12-6.24v6.24m-6.24-18.798V11.52l3.12 6.24l3.12-6.24v6.24m14.04-3.12h2.106m1.014 3.12H31.8v-6.24h3.12M31.8 33.36h2.106m1.014 3.12H31.8v-6.24h3.12"></svg:path><svg:path d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path></svg:g>`,
})
export class ArcticonsMemeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
