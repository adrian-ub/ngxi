import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCalendarMinusThinIcon],svg[ph-calendar-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-52-60a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhCalendarMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
