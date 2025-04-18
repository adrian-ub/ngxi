import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextAlignDistributed24FilledIcon],svg[fluent-text-align-distributed-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.293 3.293a1 1 0 0 1 1.414 1.414L5.414 5H21a1 1 0 1 1 0 2H5.414l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414zM18.586 19l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414l-2-2a1 1 0 0 0-1.414 1.414l.293.293H3a1 1 0 1 0 0 2zM3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentTextAlignDistributed24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
