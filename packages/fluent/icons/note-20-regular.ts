import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNote20RegularIcon],svg[fluent-note-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3a3 3 0 0 1 2.995 2.824L17 6v4.379a2 2 0 0 1-.467 1.284l-.119.13l-4.621 4.621a2 2 0 0 1-1.238.578l-.176.008H6a3 3 0 0 1-2.995-2.824L3 14V6a3 3 0 0 1 2.824-2.995L6 3zm0 1H6a2 2 0 0 0-1.995 1.85L4 6v8a2 2 0 0 0 1.85 1.995L6 16h4v-3a3 3 0 0 1 2.824-2.995L13 10h3V6a2 2 0 0 0-1.85-1.995zm1.783 7.001L13 11a2 2 0 0 0-1.995 1.85L11 13v2.781l.086-.074l4.621-4.621q.04-.04.075-.085"></svg:path>`,
})
export class FluentNote20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
