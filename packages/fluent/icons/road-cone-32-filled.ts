import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoadCone32FilledIcon],svg[fluent-road-cone-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.77 2a1.5 1.5 0 0 0-1.434 1.064L9.404 16H17a1 1 0 1 1 0 2H8.797l-.81 2.667H18.5a1 1 0 1 1 0 2h-11q-.06 0-.119-.007L5.76 28H3a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2h-2.759L18.665 3.064A1.5 1.5 0 0 0 17.229 2z"></svg:path>`,
})
export class FluentRoadCone32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
