import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderOpenDown24FilledIcon],svg[fluent-folder-open-down-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 21.004A3.25 3.25 0 0 1 2 17.754V8.843l2.045 3.54a4.25 4.25 0 0 0 3.68 2.126H20v.745a3.25 3.25 0 0 1-3.25 3.25h-5.19l-1.84 1.841a2.25 2.25 0 0 1-1.591.66zm2.475-7.995h13.02c1.732 0 2.814-1.875 1.948-3.375l-3.036-5.259A2.75 2.75 0 0 0 17.275 3H4.255c-1.73 0-2.813 1.875-1.947 3.375l3.037 5.259a2.75 2.75 0 0 0 2.381 1.375"></svg:path>`,
})
export class FluentFolderOpenDown24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
