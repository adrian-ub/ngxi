import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBedug01Icon],svg[hugeicons-bedug-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 16c1.105 0 2-3.134 2-7s-.895-7-2-7s-2 3.134-2 7s.895 7 2 7m3.5-.5L16 22m-8 0l10-12"></svg:path><svg:path d="m5 2l11.11 1.587C19.113 4.017 21 5.737 21 9c0 2.022-.935 4.38-3 5.051M5 16l9.094-1.3M8.832 2.548c.734 1.549 1.291 3.635 1.18 7.022c-.076 1.717-.325 4.092-1.157 5.88"></svg:path></svg:g>`,
})
export class HugeiconsBedug01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
