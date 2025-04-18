import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDrag20FilledIcon],svg[fluent-drag-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a.75.75 0 0 1 .53.22l1.5 1.5a.75.75 0 0 1-1.06 1.06l-.22-.22v1.69a.75.75 0 0 1-1.5 0V4.56l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5A.75.75 0 0 1 10 2m2 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9.78-.53a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-.22-.22h1.69a.75.75 0 0 0 0-1.5H4.56l.22-.22a.75.75 0 0 0-1.06-1.06zM10 18a.75.75 0 0 0 .53-.22l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.22.22v-1.69a.75.75 0 0 0-1.5 0v1.69l-.22-.22a.75.75 0 0 0-1.06 1.06l1.5 1.5c.14.141.331.22.53.22m7.78-8.53a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22h-1.69a.75.75 0 0 1 0-1.5h1.69l-.22-.22a.75.75 0 0 1 1.06-1.06z"></svg:path>`,
})
export class FluentDrag20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
