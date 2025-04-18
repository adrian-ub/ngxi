import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerStormIcon],svg[tabler-storm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0"></svg:path><svg:path d="M5.369 14.236C3.53 10.307 3.808 6.62 4.665 3M18.63 9.76c1.837 3.928 1.561 7.615.703 11.236"></svg:path></svg:g>`,
})
export class TablerStormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
