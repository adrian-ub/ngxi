import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentExtendedDock24FilledIcon],svg[fluent-extended-dock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 10.997c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 2 15.247v-2.5c0-.966.784-1.75 1.75-1.75zm7 0c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 15.247v-2.5c0-.966.784-1.75 1.75-1.75zm7 0c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.5c0-.966.784-1.75 1.75-1.75zM7.97 7.72l3.5-3.5a.75.75 0 0 1 .968-.079l.085.071l3.602 3.5a.75.75 0 0 1-.96 1.147l-.085-.071l-3.072-2.985L9.03 8.78a.75.75 0 0 1-1.133-.976zl3.5-3.5z"></svg:path>`,
})
export class FluentExtendedDock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
