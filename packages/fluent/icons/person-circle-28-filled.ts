import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonCircle28FilledIcon],svg[fluent-person-circle-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2m0 19.5c-3.314 0-6-2.143-6-5.357C8 14.959 8.96 14 10.143 14h7.714c1.184 0 2.143.96 2.143 2.143c0 3.214-2.686 5.357-6 5.357m0-9A3.25 3.25 0 1 1 14 6a3.25 3.25 0 0 1 0 6.5"></svg:path>`,
})
export class FluentPersonCircle28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
