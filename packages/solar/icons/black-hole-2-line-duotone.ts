import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBlackHole2LineDuotoneIcon],svg[solar-black-hole-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21" opacity=".5"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3" opacity=".5"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476" opacity=".5"></svg:path><svg:path stroke-dasharray="2 2" stroke-linecap="round" d="M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBlackHole2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
