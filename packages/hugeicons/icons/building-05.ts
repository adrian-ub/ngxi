import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBuilding05Icon],svg[hugeicons-building-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 22h20M18 9h-4c-2.482 0-3 .518-3 3v10h10V12c0-2.482-.518-3-3-3"></svg:path><svg:path d="M15 22H3V5c0-2.482.518-3 3-3h6c2.482 0 3 .518 3 3v4M3 6h3m-3 4h3m-3 4h3m9-1h2m-2 3h2m-1 6v-3"></svg:path></svg:g>`,
})
export class HugeiconsBuilding05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
