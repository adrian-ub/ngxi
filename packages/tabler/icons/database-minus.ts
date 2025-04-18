import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDatabaseMinusIcon],svg[tabler-database-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3s-3.582-3-8-3s-8 1.343-8 3"></svg:path><svg:path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"></svg:path><svg:path d="M4 12v6c0 1.657 3.582 3 8 3q.246 0 .49-.006M20 15v-3m-4 7h6"></svg:path></svg:g>`,
})
export class TablerDatabaseMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
