import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCursor16RegularIcon],svg[fluent-cursor-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.002 2.999a1 1 0 0 1 1.6-.8l7.998 6c.768.578.36 1.8-.6 1.8H9.053a1 1 0 0 0-.793.392l-2.466 3.214c-.581.758-1.793.347-1.793-.609zm8.997 6L5.002 3v9.997l2.465-3.213A2 2 0 0 1 9.054 9z"></svg:path>`,
})
export class FluentCursor16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
