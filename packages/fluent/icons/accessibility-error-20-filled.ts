import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAccessibilityError20FilledIcon],svg[fluent-accessibility-error-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4M5.472 4.15a1.76 1.76 0 0 0-2.317.88c-.4.882-.007 1.917.877 2.31l2.671 1.19A.5.5 0 0 1 7 8.987v1.865a.5.5 0 0 1-.036.187l-1.84 4.555a1.75 1.75 0 0 0 3.245 1.311l.085-.213A5.5 5.5 0 0 1 13 9.022v-.035a.5.5 0 0 1 .297-.457l2.671-1.19a1.74 1.74 0 0 0 .878-2.31a1.76 1.76 0 0 0-2.318-.88l-1.276.569c-.246.11-.421.307-.52.524a3 3 0 0 1-5.463 0a1.04 1.04 0 0 0-.52-.524zM18 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M13.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25"></svg:path>`,
})
export class FluentAccessibilityError20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
