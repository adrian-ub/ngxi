import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailRead48FilledIcon],svg[fluent-mail-read-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.151 4.69a6.25 6.25 0 0 1 5.698 0l13.75 7.042a6.25 6.25 0 0 1 2.605 2.51L24.002 24.35L4.834 14.176a6.25 6.25 0 0 1 2.567-2.444zM4.041 16.585q-.04.35-.041.71V33.75A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V17.295q0-.318-.032-.63L24.582 26.87a1.25 1.25 0 0 1-1.168-.002z"></svg:path>`,
})
export class FluentMailRead48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
