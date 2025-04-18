import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseExportIcon],svg[hugeicons-database-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M6 10.842c.602.18 1.274.33 2 .44M11 15c-4.418 0-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"></svg:path><svg:path d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v7m0 4.674l-1.174-1.487C17.2 14.396 16.888 14 16.5 14s-.7.396-1.326 1.187L14 16.674m2.5-2.587V22"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
