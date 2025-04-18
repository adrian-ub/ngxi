import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlyingHumanIcon],svg[hugeicons-flying-human-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.994 5.498a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path d="M21 3c-.5 2-1.5 5-6 6c-3.514.781-6.5 1-8 4"></svg:path><svg:path d="M13.5 9.5S13 20.5 5 21M17 8.5S17.5 17 3 17"></svg:path></svg:g>`,
})
export class HugeiconsFlyingHumanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
