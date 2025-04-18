import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical24RegularIcon],svg[fluent-flip-vertical-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.656 2.12a.75.75 0 0 1 .344.63v7.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.31-1.433l16.5-7.5a.75.75 0 0 1 .716.052M6.213 9.5H18.5V3.915zM20 21.5a.5.5 0 0 1-.713.452l-17-8A.5.5 0 0 1 2.5 13h17a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class FluentFlipVertical24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
