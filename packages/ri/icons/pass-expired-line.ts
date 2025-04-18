import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPassExpiredLineIcon],svg[ri-pass-expired-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18V6H3zM1 5a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm8 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2.998 6c-.967 0-1.84.39-2.475 1.025l-1.414-1.414A5.5 5.5 0 0 1 8.002 14a5.5 5.5 0 0 1 3.889 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16m9.79-7.207L16 10.586l-1.793-1.793l-1.414 1.414L14.586 12l-1.793 1.793l1.414 1.414L16 13.414l1.793 1.793l1.414-1.414L17.414 12l1.793-1.793z"></svg:path>`,
})
export class RiPassExpiredLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
