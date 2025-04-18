import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDirections32FilledIcon],svg[fluent-directions-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.318 19.182a4.5 4.5 0 0 1 0-6.364l9.5-9.5a4.5 4.5 0 0 1 6.364 0l9.5 9.5a4.5 4.5 0 0 1 0 6.364l-9.5 9.5a4.5 4.5 0 0 1-6.364 0zm15.39-9.89a1 1 0 1 0-1.415 1.415L18.586 12H16a4 4 0 0 0-4 4v5a1 1 0 1 0 2 0v-5a2 2 0 0 1 2-2h2.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z"></svg:path>`,
})
export class FluentDirections32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
