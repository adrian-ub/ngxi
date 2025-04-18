import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideEraser24RegularIcon],svg[fluent-slide-eraser-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v5.786l-.8-.801a2.5 2.5 0 0 0-.7-.493V6.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h7.265a2.5 2.5 0 0 0 .561 1.5H4.75A2.75 2.75 0 0 1 2 17.25z"></svg:path><svg:path d="M20.492 12.442a1.5 1.5 0 0 0-2.121 0l-3.111 3.11l4.207 4.208l3.11-3.111a1.5 1.5 0 0 0 0-2.122zm-7.039 4.918l1.1-1.1l4.207 4.207l-1.1 1.1a1.5 1.5 0 0 1-2.121 0l-2.086-2.086a1.5 1.5 0 0 1 0-2.122"></svg:path></svg:g>`,
})
export class FluentSlideEraser24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
