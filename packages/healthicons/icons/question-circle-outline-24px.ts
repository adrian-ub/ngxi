import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionCircleOutline24pxIcon],svg[healthicons-question-circle-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3-7.2c0-.844.87-1.8 2.31-1.8c1.438 0 2.308.956 2.308 1.8c0 .787-.836 1.78-2.515 1.8a1.06 1.06 0 0 0-1.048 1.06V14a1 1 0 0 0 2 0v-.49c1.947-.355 3.563-1.74 3.563-3.71c0-2.249-2.092-3.8-4.309-3.8S8 7.551 8 9.8a1 1 0 1 0 2 0"></svg:path><svg:path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsQuestionCircleOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
