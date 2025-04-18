import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAwardIcon],svg[tabler-award-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9"></svg:path><svg:path d="m12 15l3.4 5.89l1.598-3.233l3.598.232l-3.4-5.889M6.802 12l-3.4 5.89L7 17.657l1.598 3.232l3.4-5.889"></svg:path></svg:g>`,
})
export class TablerAwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
