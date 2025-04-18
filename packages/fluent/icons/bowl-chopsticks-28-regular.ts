import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBowlChopsticks28RegularIcon],svg[fluent-bowl-chopsticks-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.385 2.351a.75.75 0 0 0-1.27.798L11.3 13H2.75a.75.75 0 0 0-.75.75V14c0 6.628 5.373 12 12 12s12-5.372 12-12v-.25a.75.75 0 0 0-.75-.75h-7.178L11.385 2.351a.75.75 0 0 0-1.27.798L16.3 13h-3.228zm10.879 12.183l.054-.034h7.17a10.4 10.4 0 0 1-.423 2.5H3.935a10.5 10.5 0 0 1-.423-2.5h8.73l.022.034l.054-.034h4.924zM23.49 18.5a10.5 10.5 0 0 1-9.49 6a10.5 10.5 0 0 1-9.49-6z"></svg:path>`,
})
export class FluentBowlChopsticks28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
