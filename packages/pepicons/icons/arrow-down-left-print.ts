import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsArrowDownLeftPrintIcon],svg[pepicons-arrow-down-left-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".8"><svg:path d="M15.144 14.143a1.5 1.5 0 0 1-1.63 1.358l-5.185-.472a1.5 1.5 0 0 1 .271-2.987l5.186.471a1.5 1.5 0 0 1 1.358 1.63Z"></svg:path><svg:path d="M7.857 6.856a1.5 1.5 0 0 1 1.63 1.358l.471 5.186a1.5 1.5 0 1 1-2.987.271l-.472-5.185a1.5 1.5 0 0 1 1.358-1.63Z"></svg:path><svg:path d="M8.818 13.182a1.5 1.5 0 0 1 0-2.121l5.657-5.657a1.5 1.5 0 0 1 2.121 2.121l-5.657 5.657a1.5 1.5 0 0 1-2.12 0Z"></svg:path></svg:g><svg:path d="M12.148 14.052a.5.5 0 0 1-.543.453l-5.186-.472a.5.5 0 1 1 .09-.995l5.186.471a.5.5 0 0 1 .453.543Z"></svg:path><svg:path d="M5.948 7.852a.5.5 0 0 1 .543.453l.471 5.185a.5.5 0 1 1-.995.09l-.472-5.185a.5.5 0 0 1 .453-.543Z"></svg:path><svg:path d="M6.646 13.354a.5.5 0 0 1 0-.708l6.536-6.535a.5.5 0 0 1 .707.707l-6.535 6.536a.5.5 0 0 1-.708 0Z"></svg:path></svg:g>`,
})
export class PepiconsArrowDownLeftPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
