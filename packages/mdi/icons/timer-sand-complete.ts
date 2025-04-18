import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSandCompleteIcon],svg[mdi-timer-sand-complete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 22H6v-6l4-4l-4-4V2h12v6l-4 4l4 4M8 7.5l4 4l4-4V4H8m4 8.5l-4 4V20h8v-3.5M14 18h-4v-.8l2-2l2 2Z"></svg:path>`,
})
export class MdiTimerSandCompleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
