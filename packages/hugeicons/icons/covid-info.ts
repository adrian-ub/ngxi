import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCovidInfoIcon],svg[hugeicons-covid-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M14.527 15.082c4.001-3.068 3.368-6.469 1.515-7.563c-1.452-.859-2.72-.513-3.482.038c-.312.226-.468.339-.56.339s-.248-.113-.56-.339c-.762-.55-2.03-.897-3.482-.038c-1.846 1.09-2.309 4.595 1.655 7.662A21 21 0 0 0 12 16.771C13.779 17.797 16.417 19 19 19M5 19c1.549 0 3.117-.433 4.508-1"></svg:path></svg:g>`,
})
export class HugeiconsCovidInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
