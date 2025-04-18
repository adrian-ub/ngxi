import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBeakerEmpty16FilledIcon],svg[fluent-beaker-empty-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.56 11.74L10.95 9l-.61-1.05c-.22-.38-.34-.82-.34-1.26V3h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5s.22.5.5.5H6v3.69c0 .44-.12.88-.34 1.26L5.05 9l-1.61 2.74c-.58 1 .14 2.26 1.3 2.26h6.52c1.16 0 1.88-1.26 1.3-2.26"></svg:path>`,
})
export class FluentBeakerEmpty16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
