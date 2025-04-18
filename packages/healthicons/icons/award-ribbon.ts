import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAwardRibbonIcon],svg[healthicons-award-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 20c0-6.075 4.925-11 11-11s11 4.925 11 11s-4.925 11-11 11s-11-4.925-11-11"></svg:path><svg:path fill-rule="evenodd" d="M31 34.391c5.328-2.597 9-8.065 9-14.391c0-8.837-7.163-16-16-16S8 11.163 8 20c0 6.327 3.672 11.796 9.001 14.392V43a1 1 0 0 0 1.555.832L24 40.202l5.445 3.63A1 1 0 0 0 31 43zM24 34c7.732 0 14-6.268 14-14S31.732 6 24 6s-14 6.268-14 14s6.268 14 14 14" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsAwardRibbonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
