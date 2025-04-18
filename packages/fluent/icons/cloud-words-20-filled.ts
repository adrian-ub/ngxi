import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudWords20FilledIcon],svg[fluent-cloud-words-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.647 8.246C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246l-.251.005C3.373 8.347 2 9.821 2 11.623C2 13.488 3.47 15 5.282 15h9.436C16.53 15 18 13.488 18 11.623s-1.47-3.377-3.282-3.377zM8.5 7h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1M4 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m7.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentCloudWords20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
