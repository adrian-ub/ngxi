import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle428FilledIcon],svg[fluent-number-circle-4-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14m14.5-5.581c0-1.092-1.42-1.517-2.02-.605l-5.403 8.214a.95.95 0 0 0 .794 1.472h5.128v1.75a.75.75 0 0 0 1.5 0V17.5H17.5a.75.75 0 0 0 0-1.5h-1zM15 9.755V16h-4.11z"></svg:path>`,
})
export class FluentNumberCircle428FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
