import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintArrowUpLeftCircleFilledIcon],svg[pepicons-print-arrow-up-left-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M26 14c0 6.627-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2s12 5.373 12 12" opacity=".2"></svg:path><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.948 15.145a.5.5 0 0 1-.453-.543l.471-5.186a.5.5 0 0 1 .996.09l-.471 5.186a.5.5 0 0 1-.543.453"></svg:path><svg:path d="M15.148 8.945a.5.5 0 0 1-.453.543L9.51 9.96a.5.5 0 0 1-.09-.996l5.185-.472a.5.5 0 0 1 .543.453"></svg:path><svg:path d="M9.647 9.643a.5.5 0 0 1 .707 0l6.535 6.536a.5.5 0 1 1-.707.707l-6.535-6.535a.5.5 0 0 1 0-.708"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintArrowUpLeftCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
