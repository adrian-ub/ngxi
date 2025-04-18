import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTimerIcon],svg[icon-park-solid-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTimer0"><svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="28" r="16" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 4h-8m4 0v8m11 4l3-3"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 28v-6m0 6h-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTimer0)"></svg:path>`,
})
export class IconParkSolidTimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
