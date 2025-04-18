import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileScissorsIcon],svg[tabler-file-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2"></svg:path><svg:path d="M14 17a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1 0l6-6m0 6l-6-6"></svg:path></svg:g>`,
})
export class TablerFileScissorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
