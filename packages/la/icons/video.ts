import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVideoIcon],svg[la-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8v16h22v-3.375l6 3V8.375l-6 3V8zm2 2h18v12H4zm24 1.625v8.75l-4-2v-4.75z"></svg:path>`,
})
export class LaVideoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
