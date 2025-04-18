import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipHorizontal20FilledIcon],svg[fluent-flip-horizontal-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.878 15.66a.75.75 0 0 1-.628.34h-5.5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.437-.302l5.5 12.5a.75.75 0 0 1-.059.712M12.5 6.317V14.5h3.6zM2.5 16a.5.5 0 0 1-.454-.71l6-13A.5.5 0 0 1 9 2.5v13a.5.5 0 0 1-.5.5z"></svg:path>`,
})
export class FluentFlipHorizontal20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
