import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolder24FilledIcon],svg[fluent-folder-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V6.25A3.25 3.25 0 0 1 5.25 3h2.879a2.25 2.25 0 0 1 1.59.659l1.531 1.53L8.659 7.78a.75.75 0 0 1-.53.22zm0 1.5v8.25A3.25 3.25 0 0 0 5.25 21h13.5A3.25 3.25 0 0 0 22 17.75v-9a3.25 3.25 0 0 0-3.25-3.25h-5.69L9.72 8.841a2.25 2.25 0 0 1-1.591.659z"></svg:path>`,
})
export class FluentFolder24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
