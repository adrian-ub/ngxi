import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSandPausedIcon],svg[mdi-timer-sand-paused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6v12h-6l-4-4l-4 4H2V6h6l4 4l4-4M7.5 16l4-4l-4-4H4v8m8.5-4l4 4H20V8h-3.5m1.5 4v2h-.8l-2-2m-6.4 0l-2 2H6v-2Z"></svg:path>`,
})
export class MdiTimerSandPausedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
