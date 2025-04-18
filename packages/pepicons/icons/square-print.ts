import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsSquarePrintIcon],svg[pepicons-square-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 7h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 8 7Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M14 5.5H6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5Zm-7.5 8v-7h7v7h-7Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsSquarePrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
