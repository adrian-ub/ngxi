import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psQuikIcon],svg[ps-quik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328 462h63q8-47 23-150q1-5 12-62t13-87q6-74-34-114.5T291 3Q155-8 71 76Q12 135 8 213q-4 71 46.5 115.5T193 366q20-1 41-11q11-4 26-16.5t21-15.5l-7.5 36l-3.5 35l3.5 35.5l18 22.5zm-65-205q-15 11-41.5 13.5T173 261q-33-25-23-77.5t40-75.5q16-11 41-14q31-4 51 9q30 23 21.5 77.5T263 257"></svg:path>`,
})
export class PsQuikIcon {
  readonly viewBox = input("0 0 440 488")
  readonly width = input("0.91em")
  readonly height = input("1em")
}
