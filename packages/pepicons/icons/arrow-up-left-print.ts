import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsArrowUpLeftPrintIcon],svg[pepicons-arrow-up-left-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:g opacity=".8"><svg:path d="M7.857 13.64A1.5 1.5 0 0 1 6.5 12.012l.472-5.185a1.5 1.5 0 0 1 2.987.271l-.471 5.186a1.5 1.5 0 0 1-1.63 1.358Z"></svg:path><svg:path d="M15.144 6.354a1.5 1.5 0 0 1-1.358 1.63L8.6 8.455a1.5 1.5 0 0 1-.271-2.987l5.185-.472a1.5 1.5 0 0 1 1.63 1.358Z"></svg:path><svg:path d="M8.818 7.315a1.5 1.5 0 0 1 2.121 0l5.657 5.657a1.5 1.5 0 0 1-2.121 2.121L8.818 9.437a1.5 1.5 0 0 1 0-2.122Z"></svg:path></svg:g><svg:path d="M5.948 12.145a.5.5 0 0 1-.453-.543l.471-5.186a.5.5 0 0 1 .996.09l-.471 5.186a.5.5 0 0 1-.543.453Z"></svg:path><svg:path d="M12.148 5.945a.5.5 0 0 1-.453.543L6.51 6.96a.5.5 0 0 1-.09-.996l5.185-.472a.5.5 0 0 1 .543.453Z"></svg:path><svg:path d="M6.647 6.643a.5.5 0 0 1 .707 0l6.535 6.536a.5.5 0 1 1-.707.707L6.646 7.351a.5.5 0 0 1 0-.708Z"></svg:path></svg:g>`,
})
export class PepiconsArrowUpLeftPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
