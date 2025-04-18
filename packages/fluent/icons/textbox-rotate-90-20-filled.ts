import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxRotate9020FilledIcon],svg[fluent-textbox-rotate-90-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zM13 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm-3 0a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zm-3 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentTextboxRotate9020FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
