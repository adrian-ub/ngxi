import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRedditoriaIcon],svg[arcticons-redditoria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.197 4.5h11.074a9.126 9.126 0 0 1 9.127 9.126v0a9.126 9.126 0 0 1-9.127 9.127H13.197h0V5.5a1 1 0 0 1 1-1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.197 22.753V42.5a1 1 0 0 0 1 1h18.715a1.887 1.887 0 0 0 1.36-3.195l-16.88-17.552"></svg:path>`,
})
export class ArcticonsRedditoriaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
