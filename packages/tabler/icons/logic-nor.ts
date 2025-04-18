import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLogicNorIcon],svg[tabler-logic-nor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 12h-4M2 9h5m-5 6h5M6 5c10.667 2.1 10.667 12.6 0 14q2.709-7 0-14"></svg:path><svg:path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path></svg:g>`,
})
export class TablerLogicNorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
