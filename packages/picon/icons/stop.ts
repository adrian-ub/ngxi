import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStopIcon],svg[picon-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8V0H0v8"></svg:path>`,
})
export class PiconStopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
