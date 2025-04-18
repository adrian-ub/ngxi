import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTagLockAccent24FilledIcon],svg[fluent-tag-lock-accent-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 2.5a1.75 1.75 0 0 1 1.75 1.75v5.462a2.73 2.73 0 0 1-.8 1.944l-.334.335A3.5 3.5 0 0 0 14 14v.049a2.5 2.5 0 0 0-2 2.45v3.837a2.753 2.753 0 0 1-3.69-.181l-4.468-4.451a2.75 2.75 0 0 1 0-3.888l8.5-8.51a2.73 2.73 0 0 1 1.943-.807z"></svg:path>`,
})
export class FluentTagLockAccent24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
