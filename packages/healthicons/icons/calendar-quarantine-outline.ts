import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCalendarQuarantineOutlineIcon],svg[healthicons-calendar-quarantine-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M18.896 31a5.2 5.2 0 0 0 .788 1.902l-.584.584a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l.584-.584a5.2 5.2 0 0 0 1.902.788v.942A1 1 0 0 0 23.3 38h1.4a1 1 0 0 0 .3-1.954v-.942a5.2 5.2 0 0 0 2.303-1.087l.883.883a1 1 0 0 0 1.421 1.407l1.4-1.4a1 1 0 0 0-1.407-1.421l-1.02-1.02c.244-.453.423-.946.524-1.466h.942A1 1 0 0 0 32 30.7v-1.4a1 1 0 0 0-1.954-.3h-.942a5.2 5.2 0 0 0-.788-1.902l.584-.584a1 1 0 0 0 1.407-1.421l-1.4-1.4a1 1 0 0 0-1.421 1.407l-.584.584A5.2 5.2 0 0 0 25 24.896v-.942A1 1 0 0 0 24.7 22h-1.4a1 1 0 0 0-.3 1.954v.942a5.2 5.2 0 0 0-1.902.788l-.584-.584a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l.584.584A5.2 5.2 0 0 0 18.896 29h-.942a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3zm1.904-1a3.2 3.2 0 1 1 6.4 0a3.2 3.2 0 0 1-6.4 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M16 6a1 1 0 0 0-1 1v2h-5a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h28c1.658 0 3-1.347 3-3.002V12.002A3 3 0 0 0 38 9h-3v2h3c.55 0 1 .448 1 1.002V18H9v-6a1 1 0 0 1 1-1h5v1a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m-6 34a1 1 0 0 1-1-1V20h30v18.998C39 39.55 38.55 40 38 40z" clip-rule="evenodd"></svg:path><svg:path d="M32 13a1 1 0 0 1-1-1v-1H19V9h12V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1"></svg:path></svg:g>`,
})
export class HealthiconsCalendarQuarantineOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
