import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStopwatchStartIcon],svg[icon-park-solid-stopwatch-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSStopwatchStart0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c9.389 0 17-7.611 17-17s-7.611-17-17-17S7 17.611 7 27s7.611 17 17 17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 4h12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 19v8m8 0h-8"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSStopwatchStart0)"></svg:path>`,
})
export class IconParkSolidStopwatchStartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
