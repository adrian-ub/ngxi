import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTimerSandFullIcon],svg[mdi-timer-sand-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v6l4 4l-4 4v6h12v-6l-4-4l4-4V2z"></svg:path>`,
})
export class MdiTimerSandFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
