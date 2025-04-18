import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAldiTalkAktivierungIcon],svg[arcticons-aldi-talk-aktivierung-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.41 24.76l-8.832-1.234l1.916 8.709m3.458-3.737l11.096 10.265M30.41 24.761l11.096 10.265L34.59 42.5L23.494 32.235zm-18.34-.251h5.443m-5.442-4.661H26.2M16.586 5.5v10.09H6.495zm0 0h15.921v17.106m-7.489 15.665H6.494V15.59"></svg:path>`,
})
export class ArcticonsAldiTalkAktivierungIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
