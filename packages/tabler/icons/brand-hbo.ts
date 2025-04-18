import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandHboIcon],svg[tabler-brand-hbo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 16V8m4 0v8m-4-4h4m3 4h2a2 2 0 1 0 0-4H9h2a2 2 0 1 0 0-4H9zm10-8a4 4 0 1 1 0 8a4 4 0 0 1 0-8"></svg:path><svg:path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerBrandHboIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
