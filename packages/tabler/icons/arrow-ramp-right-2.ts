import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRampRight2Icon],svg[tabler-arrow-ramp-right-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 3v8.707M16 14l4-4l-4-4"></svg:path><svg:path d="M6 21c0-6.075 4.925-11 11-11h3"></svg:path></svg:g>`,
})
export class TablerArrowRampRight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
