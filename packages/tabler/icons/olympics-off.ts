import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOlympicsOffIcon],svg[tabler-olympics-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 6a3 3 0 1 0 3 3m6 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M9 9a3 3 0 0 0 3 3m2.566-1.445a3 3 0 0 0-4.135-4.113M6 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586-3.431a3 3 0 0 0-1.43-1.414M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerOlympicsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
