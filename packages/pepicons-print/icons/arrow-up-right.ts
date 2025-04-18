import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintArrowUpRightIcon],svg[pepicons-print-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".2"><svg:path d="M8.856 6.357A1.5 1.5 0 0 1 10.486 5l5.185.472a1.5 1.5 0 0 1-.271 2.987l-5.186-.471a1.5 1.5 0 0 1-1.358-1.63"></svg:path><svg:path d="M16.143 13.644a1.5 1.5 0 0 1-1.63-1.358L14.042 7.1a1.5 1.5 0 0 1 2.987-.271l.472 5.185a1.5 1.5 0 0 1-1.358 1.63"></svg:path><svg:path d="M15.182 7.318a1.5 1.5 0 0 1 0 2.121l-5.657 5.657a1.5 1.5 0 1 1-2.121-2.121l5.657-5.657a1.5 1.5 0 0 1 2.12 0"></svg:path></svg:g><svg:path d="M7.852 5.952a.5.5 0 0 1 .543-.453l5.186.472a.5.5 0 0 1-.09.996l-5.186-.472a.5.5 0 0 1-.453-.543"></svg:path><svg:path d="M14.052 12.152a.5.5 0 0 1-.543-.453l-.472-5.185a.5.5 0 0 1 .996-.09l.472 5.185a.5.5 0 0 1-.453.543"></svg:path><svg:path d="M13.354 6.65a.5.5 0 0 1 0 .708l-6.536 6.535a.5.5 0 0 1-.707-.707l6.535-6.536a.5.5 0 0 1 .707 0"></svg:path></svg:g>`,
})
export class PepiconsPrintArrowUpRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
