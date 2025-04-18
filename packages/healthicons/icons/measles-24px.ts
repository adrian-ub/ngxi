import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMeasles24pxIcon],svg[healthicons-measles-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.25 16.75V16a3.75 3.75 0 0 1 7.5 0v.75zm5.871-1.5a2.25 2.25 0 0 0-4.242 0z" clip-rule="evenodd"></svg:path><svg:path d="M7.835 7.83a.75.75 0 0 0-.67 1.34l1.21.606a.25.25 0 0 1 0 .448l-1.21.605a.75.75 0 1 0 .67 1.342l1.212-.606c1.29-.645 1.29-2.485 0-3.13zm8.33 0a.75.75 0 1 1 .67 1.34l-1.21.606a.25.25 0 0 0 0 .448l1.21.605a.75.75 0 1 1-.67 1.342l-1.212-.606c-1.29-.645-1.29-2.485 0-3.13z"></svg:path><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path><svg:path d="M10.5 5.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m10 10a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M11 21a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4.5-5.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M14 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class HealthiconsMeasles24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
