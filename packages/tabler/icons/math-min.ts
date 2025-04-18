import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMathMinIcon],svg[tabler-math-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M3 13s1-9 4-9c2.48 0 5.643 9.565 8.36 12.883m3.388.155Q19.801 15.718 21 9"></svg:path></svg:g>`,
})
export class TablerMathMinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
