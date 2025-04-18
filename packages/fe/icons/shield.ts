import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feShieldIcon],svg[fe-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 16.764l6 3V4H6zM6 2h12a2 2 0 0 1 2 2v14l-8 4l-8-4V4a2 2 0 0 1 2-2"></svg:path>`,
})
export class FeShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
