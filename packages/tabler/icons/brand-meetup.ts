import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandMeetupIcon],svg[tabler-brand-meetup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.455 10.82C6.39 8.657 8.5 7 11 7c2.104 0 2.844 1.915 2 4l-2 6M6.981 7L3 16.914"></svg:path><svg:path d="M13 11c.937-2.16 3.071-3.802 5.42-3.972c2.104 0 3.128 1.706 2.284 3.792l-2.454 6.094C17.397 18.59 19 19.5 21 19"></svg:path></svg:g>`,
})
export class TablerBrandMeetupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
