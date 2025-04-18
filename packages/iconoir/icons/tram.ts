import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTramIcon],svg[iconoir-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 16.01l.01-.011M9 16.01l.01-.011M13 6h2a5 5 0 0 1 5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a5 5 0 0 1 5-5zm0 0l1-4m0 0h3m-3 0H7"></svg:path><svg:path d="m10.5 20l-2 2.5m5-2.5l2 2.5m1-2.5l2 2.5M7.5 20l-2 2.5"></svg:path><svg:path stroke-linejoin="round" d="M9.609 9h4.782A2.61 2.61 0 0 1 17 11.609a.39.39 0 0 1-.391.391H7.39a.39.39 0 0 1-.39-.391A2.61 2.61 0 0 1 9.609 9"></svg:path></svg:g>`,
})
export class IconoirTramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
