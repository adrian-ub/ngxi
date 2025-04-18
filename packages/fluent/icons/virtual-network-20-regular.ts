import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVirtualNetwork20RegularIcon],svg[fluent-virtual-network-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.825 6.12a.5.5 0 0 1 .055.705L2.159 10l2.72 3.175a.5.5 0 1 1-.759.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 0 1 .705-.055m10.295 7.055a.5.5 0 0 0 .76.65l3-3.5a.5.5 0 0 0 0-.65l-3-3.5a.5.5 0 1 0-.76.65L17.842 10zM6 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentVirtualNetwork20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
