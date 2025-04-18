import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPauseCircleFilledIcon],svg[ci-pause-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm1-14v8h2V8h-2ZM9 8v8h2V8H9Z"></svg:path>`,
})
export class CiPauseCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
