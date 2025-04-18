import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintArrowDownRightOffIcon],svg[pepicons-print-arrow-down-right-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".2"><svg:path d="M16.143 6.856a1.5 1.5 0 0 1 1.358 1.63l-.472 5.185a1.5 1.5 0 0 1-2.987-.271l.471-5.186a1.5 1.5 0 0 1 1.63-1.358"></svg:path><svg:path d="M8.856 14.143a1.5 1.5 0 0 1 1.358-1.63l5.186-.471a1.5 1.5 0 1 1 .271 2.987l-5.185.472a1.5 1.5 0 0 1-1.63-1.358"></svg:path><svg:path d="M15.182 13.182a1.5 1.5 0 0 1-2.121 0L7.404 7.525a1.5 1.5 0 0 1 2.121-2.121l5.657 5.657a1.5 1.5 0 0 1 0 2.121"></svg:path></svg:g><svg:path d="M14.052 7.852a.5.5 0 0 1 .453.543l-.472 5.186a.5.5 0 1 1-.995-.09l.47-5.186a.5.5 0 0 1 .544-.453"></svg:path><svg:path d="M7.852 14.052a.5.5 0 0 1 .453-.543l5.185-.471a.5.5 0 0 1 .09.995l-5.185.472a.5.5 0 0 1-.543-.453"></svg:path><svg:path d="M13.354 13.354a.5.5 0 0 1-.708 0L6.111 6.818a.5.5 0 1 1 .707-.707l6.536 6.536a.5.5 0 0 1 0 .707"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintArrowDownRightOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
