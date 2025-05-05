import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAmericanfootballIcon],svg[picon-americanfootball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0v2L6 0M0 8V6l2 2M.5 5Q1 1 5 .5L7.5 3Q7 7 3 7.5M2 4l1 1l2-2l-1-1"></svg:path>`,
})
export class PiconAmericanfootballIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
