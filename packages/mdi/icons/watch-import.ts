import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWatchImportIcon],svg[mdi-watch-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h5L4.5 8.5l1.42-1.42L10.84 12l-4.92 4.92L4.5 15.5L7 13H2zm10 7a6 6 0 0 0 6-6a6 6 0 0 0-6-6c-1.4 0-2.69.5-3.71 1.29L6.87 5.87l.18-.14L8 0h8l.95 5.73A7.94 7.94 0 0 1 20 12c0 2.54-1.19 4.81-3.05 6.27L16 24H8l-.95-5.73l-.18-.14l1.42-1.42C9.31 17.5 10.6 18 12 18"></svg:path>`,
})
export class MdiWatchImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
