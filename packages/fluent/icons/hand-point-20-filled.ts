import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHandPoint20FilledIcon],svg[fluent-hand-point-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1.998a2 2 0 0 0-2 2v5.675l-1.312-.688a3.53 3.53 0 0 0-4.53 1.095a.885.885 0 0 0 .375 1.319c4.331 1.873 5.952 3.583 6.664 4.894c.545 1.003 1.616 1.86 2.905 1.681l2.866-.397a2.5 2.5 0 0 0 2.08-1.863l.823-3.253a4 4 0 0 0-3.288-4.938L12 7.138v-3.14a2 2 0 0 0-2-2"></svg:path>`,
})
export class FluentHandPoint20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
