import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodMinusIcon],svg[tabler-mood-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.48 15.014a9 9 0 1 0-7.956 5.97M9 10h.01M15 10h.01m.99 9h6"></svg:path><svg:path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1"></svg:path></svg:g>`,
})
export class TablerMoodMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
