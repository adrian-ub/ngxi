import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlugIcon],svg[lineicons-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.3 11.9h-3.4V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.9H26.6V4c0-1.2-1-2.3-2.3-2.3S22 2.7 22 4v7.9h-3.4c-2.3 0-4.3 1.9-4.3 4.3v12.4c0 7.3 6 13.3 13.3 13.3h2V60c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V41.9h2c7.3 0 13.3-6 13.3-13.3V16.2c0-2.4-1.9-4.3-4.2-4.3M45 28.6c0 4.9-4 8.8-8.8 8.8h-8.4c-4.9 0-8.8-4-8.8-8.8V16.4h26z"></svg:path>`,
})
export class LineiconsPlugIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
