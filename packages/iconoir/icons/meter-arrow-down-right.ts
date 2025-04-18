import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMeterArrowDownRightIcon],svg[iconoir-meter-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.5 3.5L7 8m0 0V4m0 4H3m12 8l-3.5-3.5"></svg:path><svg:path d="M14.5 9C10.358 9 7 12.283 7 16.333a7.2 7.2 0 0 0 .733 3.165a.93.93 0 0 0 .84.502h11.853a.93.93 0 0 0 .841-.502A7.2 7.2 0 0 0 22 16.333C22 12.283 18.642 9 14.5 9Z"></svg:path></svg:g>`,
})
export class IconoirMeterArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
