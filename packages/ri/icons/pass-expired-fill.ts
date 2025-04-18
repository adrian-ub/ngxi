import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPassExpiredFillIcon],svg[ri-pass-expired-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm9 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-5.473 7.025l-1.414-1.414A5.5 5.5 0 0 1 8.003 14c1.518 0 2.894.617 3.888 1.61l-1.414 1.415A3.5 3.5 0 0 0 8.002 16c-.967 0-1.84.39-2.475 1.025M16 10.585l1.793-1.792l1.414 1.414L17.414 12l1.793 1.793l-1.414 1.414L16 13.414l-1.793 1.793l-1.414-1.414L14.586 12l-1.793-1.793l1.414-1.414z"></svg:path>`,
})
export class RiPassExpiredFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
