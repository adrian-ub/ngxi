import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaret24FilledIcon],svg[fluent-caret-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M18 7.207c0-1.114-1.346-1.671-2.134-.884l-9.543 9.543c-.787.788-.23 2.134.884 2.134h9.043A1.75 1.75 0 0 0 18 16.25V7.207z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentCaret24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
