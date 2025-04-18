import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCiscoWebexIcon],svg[mdi-cisco-webex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3a9 9 0 0 1 9 9a9 9 0 0 1-9 9a9 9 0 0 1-9-9a9 9 0 0 1 9-9M5.94 8.5a6.988 6.988 0 0 0 2.56 9.56c3.35 1.94 10.35-10.19 7-12.12A6.988 6.988 0 0 0 5.94 8.5z" fill="currentColor"></svg:path>`,
})
export class MdiCiscoWebexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
