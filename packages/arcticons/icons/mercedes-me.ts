import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMercedesMeIcon],svg[arcticons-mercedes-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24V2.5M24 24L5.38 34.75M24 24l18.62 10.75M24 24v3.14M24 24l2.72-1.57M24 24l-2.72-1.57m0 0L24 2.5m2.72 19.93L24 2.5m18.62 32.25l-15.9-12.32M24 27.14l18.62 7.61m-37.24 0L24 27.14m-2.72-4.71L5.38 34.75"></svg:path>`,
})
export class ArcticonsMercedesMeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
