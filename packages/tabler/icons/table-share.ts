import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTableShareIcon],svg[tabler-table-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8M3 10h18M10 3v18m6 1l5-5"></svg:path><svg:path d="M21 21.5V17h-4.5"></svg:path></svg:g>`,
})
export class TablerTableShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
