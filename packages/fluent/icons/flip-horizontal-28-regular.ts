import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipHorizontal28RegularIcon],svg[fluent-flip-horizontal-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.882 23.654a.75.75 0 0 1-.632.346h-9.5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.43-.315l9.5 20.5a.75.75 0 0 1-.048.719M16.5 6.152V22.5h7.576zM2.75 24a.75.75 0 0 1-.68-1.065l9.5-20.5A.75.75 0 0 1 13 2.75v20.5a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class FluentFlipHorizontal28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
