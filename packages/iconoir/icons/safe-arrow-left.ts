import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSafeArrowLeftIcon],svg[iconoir-safe-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 19V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 3h7a2 2 0 0 1 2 2v.5M12 21h7a2 2 0 0 0 2-2v-.5M8.5 15C7.672 15 7 13.657 7 12s.672-3 1.5-3s1.5 1.343 1.5 3s-.672 3-1.5 3m1-5.5l1-1m-3 1l-1-1m0 7l1-1m3 1l-1-1M2 8h1M2 6h1m0 10H2m1 2H2m20-6h-7m0 0l3.5-3.5M15 12l3.5 3.5"></svg:path></svg:g>`,
})
export class IconoirSafeArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
