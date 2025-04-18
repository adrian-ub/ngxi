import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAtIcon],svg[tabler-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-5.5 8.28"></svg:path></svg:g>`,
})
export class TablerAtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
