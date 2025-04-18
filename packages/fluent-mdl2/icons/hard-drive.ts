import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HardDriveIcon],svg[fluent-mdl2-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1856 640q40 0 75 15t61 41t41 61t15 75v576H0V832q0-40 15-75t41-61t61-41t75-15zm64 192q0-26-19-45t-45-19H192q-26 0-45 19t-19 45v448h1792zm-256 64h128v128h-128zm-256 0h128v128h-128z"></svg:path>`,
})
export class FluentMdl2HardDriveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
