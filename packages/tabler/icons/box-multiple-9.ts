import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoxMultiple9Icon],svg[tabler-box-multiple-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"></svg:path><svg:path d="M12 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M12 12a2 2 0 1 0 4 0V8"></svg:path><svg:path d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"></svg:path></svg:g>`,
})
export class TablerBoxMultiple9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
