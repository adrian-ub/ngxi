import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionVertical24FilledIcon],svg[fluent-text-direction-vertical-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a1 1 0 0 0-2 0v13.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L8 17.586zm9.173-.385a1 1 0 0 0-1.846 0l-3.75 9a1 1 0 1 0 1.846.77L14.417 11h3.667l.993 2.385a1 1 0 0 0 1.846-.77zM17.25 9h-2l1-2.4zM16 14a1 1 0 0 0-1 1v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414l-.293.293V15a1 1 0 0 0-1-1"></svg:path>`,
})
export class FluentTextDirectionVertical24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
