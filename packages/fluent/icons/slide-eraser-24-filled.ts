import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideEraser24FilledIcon],svg[fluent-slide-eraser-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h7.826a2.5 2.5 0 0 1 .17-3.348l4.917-4.917a2.5 2.5 0 0 1 3.536 0l.801.8V6.75A2.75 2.75 0 0 0 19.25 4z"></svg:path><svg:path d="M20.492 12.442a1.5 1.5 0 0 0-2.121 0l-3.111 3.11l4.207 4.208l3.11-3.111a1.5 1.5 0 0 0 0-2.122zm-7.039 4.918l1.1-1.1l4.207 4.207l-1.1 1.1a1.5 1.5 0 0 1-2.121 0l-2.086-2.086a1.5 1.5 0 0 1 0-2.122"></svg:path></svg:g>`,
})
export class FluentSlideEraser24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
