import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRoute2Icon],svg[tabler-route-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0M19 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5-2a2 2 0 0 0-2 2v10a2 2 0 0 1-2 2"></svg:path>`,
})
export class TablerRoute2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
