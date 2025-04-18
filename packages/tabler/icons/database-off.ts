import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDatabaseOffIcon],svg[tabler-database-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.983 8.978C16.938 8.796 20 7.532 20 6c0-1.657-3.582-3-8-3c-1.661 0-3.204.19-4.483.515M4.734 4.743C4.263 5.125 4 5.551 4 6c0 1.22 1.944 2.271 4.734 2.74"></svg:path><svg:path d="M4 6v6c0 1.657 3.582 3 8 3c.986 0 1.93-.067 2.802-.19m3.187-.82C19.24 13.46 20 12.762 20 12V6"></svg:path><svg:path d="M4 12v6c0 1.657 3.582 3 8 3c3.217 0 5.991-.712 7.261-1.74M20 16v-4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerDatabaseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
