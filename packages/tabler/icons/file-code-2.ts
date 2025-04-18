import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileCode2Icon],svg[tabler-file-code-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 12H9v5h1m4-5h1v5h-1m0-14v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2"></svg:path></svg:g>`,
})
export class TablerFileCode2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
