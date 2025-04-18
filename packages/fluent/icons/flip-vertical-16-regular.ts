import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical16RegularIcon],svg[fluent-flip-vertical-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.763 1.075A.5.5 0 0 1 13 1.5v5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.224-.947l10-5a.5.5 0 0 1 .487.022M4.618 6H12V2.309zM13 14.5a.5.5 0 0 1-.724.447l-10-5A.5.5 0 0 1 2.5 9h10a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class FluentFlipVertical16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
