import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8RefreshIcon],svg[icons8-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-5.11 0-9.383 3.16-11.125 7.625l1.844.75C8.176 8.64 11.71 6 16 6c3.24 0 6.134 1.59 7.938 4H20v2h7V5h-2v3.094A11.93 11.93 0 0 0 16 4m9.28 15.625C23.824 23.36 20.29 26 16 26c-3.276 0-6.157-1.612-7.97-4H12v-2H5v7h2v-3.094C9.19 26.386 12.395 28 16 28c5.11 0 9.383-3.16 11.125-7.625z"></svg:path>`,
})
export class Icons8RefreshIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
