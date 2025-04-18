import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleHangoutsIcon],svg[mdi-google-hangouts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 11l-1 2h-1.5l1-2H12V8h3m-4 3l-1 2H8.5l1-2H8V8h3m.5-6A8.5 8.5 0 0 0 3 10.5a8.5 8.5 0 0 0 8.5 8.5h.5v3.5c4.86-2.35 8-7.5 8-12A8.5 8.5 0 0 0 11.5 2"></svg:path>`,
})
export class MdiGoogleHangoutsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
