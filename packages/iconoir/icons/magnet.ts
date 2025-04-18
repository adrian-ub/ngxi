import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMagnetIcon],svg[iconoir-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4v8.296C4 16.551 7.582 20 12 20s8-3.45 8-7.704V4"></svg:path><svg:path d="M4 4h5.63v6.818C9.63 12.023 10.69 13 12 13s2.37-.977 2.37-2.182V4H20M9 8H4m16 0h-5"></svg:path></svg:g>`,
})
export class IconoirMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
