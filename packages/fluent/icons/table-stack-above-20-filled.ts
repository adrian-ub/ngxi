import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackAbove20FilledIcon],svg[fluent-table-stack-above-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM15 17h-2v-4h4v2a2 2 0 0 1-2 2m2-5h-4V8h3.5a.5.5 0 0 1 .5.5zm-5 0V8H8v4zm-4 5h4v-4H8zM7 8v4H3V8.5a.5.5 0 0 1 .5-.5zm0 9H5a2 2 0 0 1-2-2v-2h4z"></svg:path>`,
})
export class FluentTableStackAbove20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
