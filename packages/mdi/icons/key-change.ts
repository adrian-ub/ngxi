import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyChangeIcon],svg[mdi-key-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2c2 0 3.6 1.2 4.2 3H21v3h-3v3h-3V8h-3.3c-.6 1.8-2.3 3-4.2 3C5 11 3 9 3 6.5S5 2 7.5 2m0 3C6.7 5 6 5.7 6 6.5S6.7 8 7.5 8S9 7.3 9 6.5S8.3 5 7.5 5m0 8c2 0 3.6 1.2 4.2 3H21v3h-1v3h-2v-3h-2v3h-3v-3h-1.3c-.6 1.8-2.3 3-4.2 3C5 22 3 20 3 17.5S5 13 7.5 13m0 3c-.8 0-1.5.7-1.5 1.5S6.7 19 7.5 19S9 18.3 9 17.5S8.3 16 7.5 16"></svg:path>`,
})
export class MdiKeyChangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
