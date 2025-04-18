import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerJacketIcon],svg[tabler-jacket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 3l-4 5l-4-5"></svg:path><svg:path d="M12 19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.172a2 2 0 0 1 .586-1.414l.828-.828A2 2 0 0 0 6 7.172V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.172a2 2 0 0 0 .586 1.414l.828.828A2 2 0 0 1 20 10.828V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2"></svg:path><svg:path d="M20 13h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3M4 17h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4m8 6V8"></svg:path></svg:g>`,
})
export class TablerJacketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
