import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLock24FilledIcon],svg[fluent-lock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2a4 4 0 0 1 4 4v2h2.5A1.5 1.5 0 0 1 20 9.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5v-11A1.5 1.5 0 0 1 5.5 8H8V6a4 4 0 0 1 4-4zm0 11.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zM12 4a2 2 0 0 0-2 2v2h4V6a2 2 0 0 0-2-2z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentLock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
