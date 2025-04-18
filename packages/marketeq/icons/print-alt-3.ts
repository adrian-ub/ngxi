import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPrintAlt3Icon],svg[marketeq-print-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M35.604 33.333h6.063a2.083 2.083 0 0 0 2.083-2.083V14.583a2.083 2.083 0 0 0-2.083-2.083H8.333a2.083 2.083 0 0 0-2.083 2.083V31.25a2.083 2.083 0 0 0 2.083 2.083h6.063M35.417 6.25H14.583v6.25h20.834z"></svg:path><svg:path stroke="#344054" d="M37.5 43.75h-25l4.167-22.917h16.666z"></svg:path></svg:g>`,
})
export class MarketeqPrintAlt3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
