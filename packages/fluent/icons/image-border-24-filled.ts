import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageBorder24FilledIcon],svg[fluent-image-border-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.409 12.659L8 15.068V8h8v7.068l-2.409-2.409a2.25 2.25 0 0 0-3.182 0M14 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-1.47 4.72L14.81 16H9.19l2.28-2.28a.75.75 0 0 1 1.06 0M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm4.25.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class FluentImageBorder24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
