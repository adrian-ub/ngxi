import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowWaveLeftUpIcon],svg[tabler-arrow-wave-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 10H3v4"></svg:path><svg:path d="M21 12c-.887-1.285-2.48-2.033-4-2c-1.52-.033-3.113.715-4 2c-.887 1.284-2.48 2.033-4 2c-1.52.033-3-1-4-2l-2-2"></svg:path></svg:g>`,
})
export class TablerArrowWaveLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
