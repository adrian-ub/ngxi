import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAdCircleIcon],svg[tabler-ad-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0"></svg:path><svg:path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0V15m-3-2h3m4-4v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></svg:path></svg:g>`,
})
export class TablerAdCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
