import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRegisteredIcon],svg[tabler-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M10 15V9h2a2 2 0 1 1 0 4h-2m4 2l-2-2"></svg:path></svg:g>`,
})
export class TablerRegisteredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
