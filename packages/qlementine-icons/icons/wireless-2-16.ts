import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsWireless216Icon],svg[qlementine-icons-wireless-2-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.9 6.55C2.52 4.39 5.1 3 8 3s5.48 1.39 7.1 3.55a.5.5 0 0 0 .8-.6C14.1 3.55 11.23 2 8 2S1.9 3.55.1 5.95a.5.5 0 0 0 .799.6z"></svg:path><svg:path fill="currentColor" d="M2.9 8.55A6.36 6.36 0 0 1 8 6c2.09 0 3.94 1 5.1 2.55a.5.5 0 0 0 .8-.6C12.56 6.16 10.41 5 8 5S3.44 6.16 2.1 7.95a.5.5 0 0 0 .799.6z"></svg:path><svg:path fill="currentColor" d="M8 9c-1.27 0-2.39.608-3.1 1.55a.5.5 0 0 1-.8-.6a4.872 4.872 0 0 1 7.8 0a.5.5 0 0 1-.799.6A3.87 3.87 0 0 0 8.001 9zm0 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class QlementineIconsWireless216Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
