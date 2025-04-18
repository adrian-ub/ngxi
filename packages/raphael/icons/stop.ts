import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelStopIcon],svg[raphael-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 5.5h20v20h-20z"></svg:path>`,
})
export class RaphaelStopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
