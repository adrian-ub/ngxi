import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleUp20FilledIcon],svg[fluent-triangle-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.32 2.785c-.568-1.047-2.071-1.047-2.638 0l-6.5 12a1.5 1.5 0 0 0 1.32 2.214H16.5a1.5 1.5 0 0 0 1.319-2.215z"></svg:path>`,
})
export class FluentTriangleUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
