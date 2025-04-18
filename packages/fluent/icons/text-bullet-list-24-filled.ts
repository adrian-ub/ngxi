import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletList24FilledIcon],svg[fluent-text-bullet-list-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993zh13.503zm-4-6.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993zh13.503zm-4-6.492a1.5 1.5 0 1 1 0 2.999a1.5 1.5 0 0 1 0-3M7.5 5h13.503a1 1 0 0 1 .117 1.993L21.003 7H7.5a1 1 0 0 1-.116-1.993zh13.503z"></svg:path>`,
})
export class FluentTextBulletList24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
