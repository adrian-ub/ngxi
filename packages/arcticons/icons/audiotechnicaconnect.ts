import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAudiotechnicaconnectIcon],svg[arcticons-audiotechnicaconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.43 41.93L25.22 5.28a1.33 1.33 0 0 0-1.65-.71a1.25 1.25 0 0 0-.79.71L8.57 41.93a1.17 1.17 0 0 0 .82 1.51a1.3 1.3 0 0 0 .4.06h28.43a1.25 1.25 0 0 0 1.28-1.21a.9.9 0 0 0-.07-.36m-8.09-20.85l-8.7 22.42"></svg:path>`,
})
export class ArcticonsAudiotechnicaconnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
