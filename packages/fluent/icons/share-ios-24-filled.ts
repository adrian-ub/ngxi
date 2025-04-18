import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareIos24FilledIcon],svg[fluent-share-ios-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.707 2.293a1 1 0 0 0-1.414 0l-5.25 5.25a1 1 0 0 0 1.414 1.414L11 5.414V15a1 1 0 1 0 2 0V5.414l3.543 3.543a1 1 0 1 0 1.414-1.414zM4 11a1 1 0 0 1 1 1v5.5A1.5 1.5 0 0 0 6.5 19h11a1.5 1.5 0 0 0 1.5-1.5V12a1 1 0 1 1 2 0v5.5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5V12a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentShareIos24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
