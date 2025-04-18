import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAwardRibbonNegativeIcon],svg[healthicons-award-ribbon-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsAwardRibbonNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-8.001 20c0 6.326-3.671 11.794-8.999 14.391v8.61a1 1 0 0 1-1.555.831L24 40.202l-5.445 3.63A1 1 0 0 1 17 43v-8.608C11.67 31.796 7.999 26.327 7.999 20c0-8.837 7.163-16 16-16s16 7.163 16 16m-2 0c0 7.732-6.268 14-14 14s-14-6.268-14-14s6.268-14 14-14s14 6.268 14 14M24 9c-6.075 0-11 4.925-11 11s4.925 11 11 11s11-4.925 11-11S30.075 9 24 9" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAwardRibbonNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAwardRibbonNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
