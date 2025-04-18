import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleImage28FilledIcon],svg[fluent-circle-image-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 10h3.734A7.5 7.5 0 1 0 10 17.984V14.25A4.25 4.25 0 0 1 14.25 10m0 1A3.25 3.25 0 0 0 11 14.25v7.5c0 .626.177 1.21.483 1.706l4.75-4.749a2.5 2.5 0 0 1 3.535 0l4.749 4.75A3.24 3.24 0 0 0 25 21.75v-7.5A3.25 3.25 0 0 0 21.75 11zm9.206 13.517l-4.749-4.75a1 1 0 0 0-1.414 0l-4.75 4.75A3.24 3.24 0 0 0 14.25 25h7.5c.626 0 1.21-.177 1.706-.483M22 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentCircleImage28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
