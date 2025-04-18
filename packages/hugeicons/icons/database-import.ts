import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseImportIcon],svg[hugeicons-database-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M7 10.842c.602.18 1.274.33 2 .44M12 15c-4.418 0-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"></svg:path><svg:path d="M12 22c-4.418 0-8-1.343-8-3V5m16 0v7m0 7.327l-1.174 1.486C18.2 21.604 17.888 22 17.5 22s-.7-.396-1.326-1.187L15 19.327m2.5 2.586V14"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
