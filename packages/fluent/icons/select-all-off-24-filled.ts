import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSelectAllOff24FilledIcon],svg[fluent-select-all-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v9.5A3.25 3.25 0 0 0 6.25 19h9.5A3.25 3.25 0 0 0 19 15.75v-9.5A3.25 3.25 0 0 0 15.75 3zm2.991 18.5A3.25 3.25 0 0 1 6.5 19.999h9.746A3.753 3.753 0 0 0 20 16.246V6.5a3.25 3.25 0 0 1 1.5 2.741v7.005a5.254 5.254 0 0 1-5.254 5.254z"></svg:path>`,
})
export class FluentSelectAllOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
