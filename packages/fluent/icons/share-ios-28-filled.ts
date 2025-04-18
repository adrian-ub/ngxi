import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareIos28FilledIcon],svg[fluent-share-ios-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.707 2.293a1 1 0 0 0-1.414 0l-6.75 6.75a1 1 0 0 0 1.414 1.414L13 5.414V18a1 1 0 1 0 2 0V5.414l5.043 5.043a1 1 0 0 0 1.414-1.414zM4 13a1 1 0 0 1 1 1v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a1 1 0 1 1 2 0v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-7a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentShareIos28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
