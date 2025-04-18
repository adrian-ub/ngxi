import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidVaccineProtectionFaceMask1Icon],svg[covid-vaccine-protection-face-mask-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.563a3 3 0 0 0-1.8.6c-.779.584-2.726 2.15-3.7 2.15L5 7.438v9l3.285 1.971A7.2 7.2 0 0 0 12 19.438m-7-3l-.357-.168A6.78 6.78 0 0 1 .75 10.135A2.98 2.98 0 0 1 5 7.438m7-2.875a3 3 0 0 1 1.8.6c.779.584 2.726 2.15 3.7 2.15l1.5.125v9l-3.285 1.971A7.2 7.2 0 0 1 12 19.438m7-3l.357-.168a6.78 6.78 0 0 0 3.893-6.135A2.98 2.98 0 0 0 19 7.438m-9.5 4.75h5m-2.5 2.5v-5"></svg:path>`,
})
export class CovidVaccineProtectionFaceMask1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
