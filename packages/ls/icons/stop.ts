import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsStopIcon],svg[ls-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 45v604c0 17 14 31 31 31h604c17 0 31-14 31-31V45c0-17-14-31-31-31H31C14 14 0 28 0 45"></svg:path>`,
})
export class LsStopIcon {
  readonly viewBox = input("0 0 666 680")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
