import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRowTriple24FilledIcon],svg[fluent-row-triple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 2.02A1.75 1.75 0 0 0 4 3.77v2.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 6.27v-2.5a1.75 1.75 0 0 0-1.75-1.75zm0 7A1.75 1.75 0 0 0 4 10.77v2.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 13.27v-2.5a1.75 1.75 0 0 0-1.75-1.75zm0 7A1.75 1.75 0 0 0 4 17.77v2.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 20.27v-2.5a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class FluentRowTriple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
