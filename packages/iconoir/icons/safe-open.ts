import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSafeOpenIcon],svg[iconoir-safe-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15C6.672 15 6 13.657 6 12s.672-3 1.5-3S9 10.343 9 12s-.672 3-1.5 3m5.5-1v-4m-4.5-.5l1-1m-3 1l-1-1m0 7l1-1m3 1l-1-1M2 8h1M2 6h1m0 10H2m1 2H2"></svg:path></svg:g>`,
})
export class IconoirSafeOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
