import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psTicketIcon],svg[ps-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 512h45q14 0 25.5-9t14.5-23q4-14 15.5-23t25.5-9t25.5 9t14.5 23q12 32 41 32h49q17 0 30-12.5t13-30.5V43q0-18-13-30.5T304 0h-45q-14 0-25.5 9T219 32q-12 32-43 32q-14 0-25.5-9T135 32Q125 0 93 0H48Q31 0 18 12.5T5 43v426q0 18 13 30.5T48 512m0-469l45 2q7 27 30.5 44.5T176 107t52.5-18T259 43h45v426l-45-2q-7-27-30.5-44.5T176 405t-52.5 18T93 469H48zm192 341q17 0 30-12.5t13-30.5V171q0-18-13-30.5T240 128H112q-17 0-30 12.5T69 171v170q0 18 13 30.5t30 12.5zM112 171h128v170H112z"></svg:path>`,
})
export class PsTicketIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
