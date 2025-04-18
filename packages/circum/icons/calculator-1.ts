import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCalculator1Icon],svg[circum-calculator-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 21.937h-9a2.5 2.5 0 0 1-2.5-2.5V4.563a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v14.874a2.5 2.5 0 0 1-2.5 2.5m-9-18.874a1.5 1.5 0 0 0-1.5 1.5v14.874a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V4.563a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M14.5 9.757h-5a1.5 1.5 0 0 1-1.5-1.5V6.563a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v1.694a1.5 1.5 0 0 1-1.5 1.5m-5-3.694a.5.5 0 0 0-.5.5v1.694a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V6.563a.5.5 0 0 0-.5-.5Z"></svg:path><svg:circle cx="12" cy="11.508" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.25" cy="11.508" r=".75" fill="currentColor"></svg:circle><svg:circle cx="8.75" cy="11.508" r=".75" fill="currentColor"></svg:circle><svg:circle cx="12" cy="14.848" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.25" cy="14.848" r=".75" fill="currentColor"></svg:circle><svg:circle cx="8.75" cy="14.848" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.25" cy="18.187" r=".75" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12.248 18.687H8.5a.5.5 0 0 1 0-1h3.744a.5.5 0 1 1 0 1Z"></svg:path>`,
})
export class CircumCalculator1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
