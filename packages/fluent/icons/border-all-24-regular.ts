import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderAll24RegularIcon],svg[fluent-border-all-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25zm9.75 13.75h5.5c.69 0 1.25-.56 1.25-1.25v-5.5h-6.75zm-1.5-6.75H4.5v5.5c0 .69.56 1.25 1.25 1.25h5.5zm1.5-1.5h6.75v-5.5c0-.69-.56-1.25-1.25-1.25h-5.5zm-1.5-6.75h-5.5c-.69 0-1.25.56-1.25 1.25v5.5h6.75z"></svg:path>`,
})
export class FluentBorderAll24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
