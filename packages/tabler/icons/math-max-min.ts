import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathMaxMinIcon],svg[tabler-math-max-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M3 14s.605-5.44 2.284-7.862m3.395.026c2.137 2.652 4.547 9.113 6.68 11.719m3.389.155Q19.801 16.718 21 10"></svg:path></svg:g>`,
})
export class TablerMathMaxMinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
