import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitWeekIcon],svg[formkit-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"></svg:path><svg:path fill="currentColor" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path><svg:circle cx="4" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="1" fill="currentColor"></svg:circle>`,
})
export class FormkitWeekIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
