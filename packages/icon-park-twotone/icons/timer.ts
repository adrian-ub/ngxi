import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTimerIcon],svg[icon-park-twotone-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTimer0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="28" r="16" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 4h-8m4 0v8m11 4l3-3M24 28v-6m0 6h-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTimer0)"></svg:path>`,
})
export class IconParkTwotoneTimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
