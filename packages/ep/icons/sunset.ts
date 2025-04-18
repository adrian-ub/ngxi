import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epSunsetIcon],svg[ep-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32m256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32"></svg:path>`,
})
export class EpSunsetIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
