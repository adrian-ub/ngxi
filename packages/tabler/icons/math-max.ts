import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathMaxIcon],svg[tabler-math-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M3 15s.616-5.544 2.332-7.93m3.305.042C11.354 10.425 14.519 20 17 20q3 0 4-9"></svg:path></svg:g>`,
})
export class TablerMathMaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
