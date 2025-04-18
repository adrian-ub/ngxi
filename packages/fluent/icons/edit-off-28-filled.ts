import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEditOff28FilledIcon],svg[fluent-edit-off-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.25 17.31l8.47 8.47a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.47 8.47l-6.187 6.187c-.44.44-.76.986-.928 1.586l-1.547 5.525a.75.75 0 0 0 .924.924l5.524-1.547a3.6 3.6 0 0 0 1.587-.928zm-3.44-7.682l5.562 5.56l3.877-3.877l-5.56-5.56zm6.48-6.478a3.932 3.932 0 1 1 5.56 5.56l-1.54 1.54l-5.56-5.56z"></svg:path>`,
})
export class FluentEditOff28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
