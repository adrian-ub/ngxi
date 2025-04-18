import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextItalic24RegularIcon],svg[fluent-text-italic-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 4h8.504a.75.75 0 0 1 .102 1.493l-.102.006h-3.197L10.037 18.5h4.213a.75.75 0 0 1 .742.648l.007.102a.75.75 0 0 1-.648.743L14.25 20h-9.5a.747.747 0 0 1-.746-.75c0-.38.28-.694.645-.743l.101-.007h3.685l.021-.065L13.45 5.499h-3.7a.75.75 0 0 1-.742-.648L9 4.75a.75.75 0 0 1 .648-.743zh8.503z"></svg:path>`,
})
export class FluentTextItalic24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
