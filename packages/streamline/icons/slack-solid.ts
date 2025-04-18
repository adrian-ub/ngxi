import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSlackSolidIcon],svg[streamline-slack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.855.25c.428 0 .775.347.775.775v5.1a.775.775 0 0 1-1.55 0v-5.1c0-.428.347-.775.775-.775M5.145 7.1c.429 0 .776.346.776.774v5.101a.775.775 0 1 1-1.55 0v-5.1c0-.429.347-.776.775-.776Zm-4.12-2.73a.775.775 0 0 0 0 1.55h5.1a.775.775 0 1 0 0-1.55zm6.074 4.485c0-.428.347-.775.775-.775h5.101a.775.775 0 1 1 0 1.55h-5.1a.775.775 0 0 1-.776-.775M5 2a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2M1 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSlackSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
