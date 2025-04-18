import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsXIcon],svg[ls-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M519 128L315 380l222 274h-93L269 437L93 654H0l223-274L19 128h93l157 194l156-194z"></svg:path>`,
})
export class LsXIcon {
  readonly viewBox = input("0 0 537 654")
  readonly width = input("0.83em")
  readonly height = input("1em")
}
