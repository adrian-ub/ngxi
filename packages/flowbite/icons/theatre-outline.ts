import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteTheatreOutlineIcon],svg[flowbite-theatre-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7.533 11.862l.01-.003m5.581 7.143c-.5.515-.92.847-1.06.89c-.48.145-5.43-1.28-6.238-3.33c-.81-2.051-1.831-5.816-1.89-6.22c-.06-.404 1.56-1.724 3.597-2.61m1.989 8.055c-.227.262-.39.56-.556.847M13.5 12c.5.5 1 1.049 2 1.049S17 12.5 17.5 12m-4-4h.01m3.99 0h.01M10.5 5.5c0-.29 2.5-1.5 5-1.5s5 1.136 5 1.5V12c0 1.966-4.291 5-5 5c-.743 0-5-3.034-5-5z"></svg:path>`,
})
export class FlowbiteTheatreOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
