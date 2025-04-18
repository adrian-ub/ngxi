import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsResizeFieldIcon],svg[hugeicons-resize-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.435 18.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22m-5 0c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7-7c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-7 7c-.15.15-.34.22-.53.22m-5 0c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l12-12c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-12 12c-.15.15-.34.22-.53.22" color="currentColor"></svg:path>`,
})
export class HugeiconsResizeFieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
