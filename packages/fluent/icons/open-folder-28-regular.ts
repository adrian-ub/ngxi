import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOpenFolder28RegularIcon],svg[fluent-open-folder-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.75A4.75 4.75 0 0 1 7.75 3h12.5A4.75 4.75 0 0 1 25 7.75v5.5a.75.75 0 0 1-1.5 0v-5.5a3.25 3.25 0 0 0-3.25-3.25H7.75A3.25 3.25 0 0 0 4.5 7.75v12.5a3.25 3.25 0 0 0 3.25 3.25h5.5a.75.75 0 0 1 0 1.5h-5.5A4.75 4.75 0 0 1 3 20.25zm7.5 3.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-5.632l8.664 8.721a.75.75 0 1 1-1.064 1.058L12 13.003v5.747a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentOpenFolder28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
