import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsFrCpIcon],svg[circle-flags-fr-cp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsFrCp0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsFrCp0)"><svg:path fill="#0052b4" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#fff" d="m256 52l204 204l-204 204L52 256Z"></svg:path><svg:path fill="#ff9811" d="m232 463l12-299h24l12 299z"></svg:path><svg:path fill="#6da544" d="M293 172c31-14 42-23 90-22c-40-18-77-23-108 0c9-23 27-54 59-77c-55 9-82 36-86 68c-14-32-55-45-100-45c50 27 36 27 73 63c-32-5-68 9-104 50c49-27 72-18 104-14a90 90 0 0 0-41 86c36-45 31-32 77-72c18 40 40 49 49 86c9-37 0-77-18-91c36 14 68 23 86 50c-9-63-50-72-81-82"></svg:path></svg:g>`,
})
export class CircleFlagsFrCpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
