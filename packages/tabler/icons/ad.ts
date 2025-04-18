import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAdIcon],svg[tabler-ad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M7 15v-4a2 2 0 0 1 4 0v4m-4-2h4m6-4v6h-1.5a1.5 1.5 0 1 1 1.5-1.5"></svg:path></svg:g>`,
})
export class TablerAdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
