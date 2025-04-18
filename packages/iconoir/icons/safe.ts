import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSafeIcon],svg[iconoir-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m8-1v-4m-5.5-.5l1-1m-6 1l-1-1m0 7l1-1m6 1l-1-1M2 8h1M2 6h1m0 10H2m1 2H2"></svg:path></svg:g>`,
})
export class IconoirSafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
