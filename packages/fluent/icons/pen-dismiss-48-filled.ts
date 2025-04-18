import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPenDismiss48FilledIcon],svg[fluent-pen-dismiss-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.206 6.026a6.907 6.907 0 1 1 9.768 9.767l-6.45 6.452A13 13 0 0 0 33 22c-7.18 0-13 5.82-13 13q.002 1.298.245 2.525l-2.439 2.439a6 6 0 0 1-2.76 1.573L5.56 43.96a1.25 1.25 0 0 1-1.521-1.52l2.427-9.486a6 6 0 0 1 1.572-2.758zM44 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L33 33.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L31.586 35l-4.293 4.293a1 1 0 0 0 1.414 1.414L33 36.414l4.293 4.293a1 1 0 0 0 1.414-1.414L34.414 35z"></svg:path>`,
})
export class FluentPenDismiss48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
