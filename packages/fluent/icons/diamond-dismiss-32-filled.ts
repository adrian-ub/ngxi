import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamondDismiss32FilledIcon],svg[fluent-diamond-dismiss-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.318 19.182a4.5 4.5 0 0 1 0-6.364l9.5-9.5a4.5 4.5 0 0 1 6.364 0l9.5 9.5a4.5 4.5 0 0 1 0 6.364l-9.5 9.5a4.5 4.5 0 0 1-6.364 0zm9.39-7.89a1 1 0 0 0-1.415 1.415L14.586 16l-3.293 3.293a1 1 0 0 0 1.414 1.414L16 17.414l3.293 3.293a1 1 0 0 0 1.414-1.414L17.414 16l3.293-3.293a1 1 0 0 0-1.414-1.414L16 14.586z"></svg:path>`,
})
export class FluentDiamondDismiss32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
