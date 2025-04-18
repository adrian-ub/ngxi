import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCalculatorOffIcon],svg[tabler-calculator-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.823 19.824A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2V5c0-.295.064-.575.178-.827M7 3h11a2 2 0 0 1 2 2v11"></svg:path><svg:path d="M10 10H9a1 1 0 0 1-1-1V8m3-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1m-6 4v.01m4-.01v.01M8 17v.01m4-.01v.01m4-.01v.01M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCalculatorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
