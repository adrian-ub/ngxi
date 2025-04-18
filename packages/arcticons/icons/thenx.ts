import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThenxIcon],svg[arcticons-thenx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.8 8.797l30.407 30.406m0-30.406L8.84 39.164M3.18 18.65h7.19m-3.595 10.7v-10.7m20.813 15.847v10.7l-7.19-10.7v10.7m.011-42.394v10.7m7.19-10.7v10.7m-7.19-5.37h7.19M39.328 24h3.586m1.906-5.35h-5.5v10.7h5.5"></svg:path>`,
})
export class ArcticonsThenxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
