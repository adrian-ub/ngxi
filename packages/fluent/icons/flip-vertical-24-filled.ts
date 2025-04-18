import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical24FilledIcon],svg[fluent-flip-vertical-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.547 2.163A1 1 0 0 1 20 3v7a1 1 0 0 1-1 1H3a1 1 0 0 1-.4-1.916l16-7a1 1 0 0 1 .947.08M7.781 9H18V4.529zM20 21.5a.5.5 0 0 1-.713.452l-17-8A.5.5 0 0 1 2.5 13h17a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class FluentFlipVertical24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
