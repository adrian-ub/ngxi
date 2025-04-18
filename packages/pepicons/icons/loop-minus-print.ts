import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsLoopMinusPrintIcon],svg[pepicons-loop-minus-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.828 5.828a6 6 0 0 0 6.865 9.642c.058.091.127.178.207.258l3.535 3.535a1.5 1.5 0 0 0 2.121-2.12l-3.535-3.536l-.06-.057a6.002 6.002 0 0 0-9.133-7.722Z" clip-rule="evenodd" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M5.182 5.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778Zm7.071 7.071A4.5 4.5 0 1 1 5.89 5.889a4.5 4.5 0 0 1 6.364 6.364Z" clip-rule="evenodd"></svg:path><svg:path d="M12 14.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414L12 14.12ZM6.707 9.414a.5.5 0 1 1 0-1h4.485a.5.5 0 0 1 0 1H6.707Z"></svg:path></svg:g>`,
})
export class PepiconsLoopMinusPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
