import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmarkStarburst20FilledIcon],svg[fluent-checkmark-starburst-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.46 1.897l.99.39a1.5 1.5 0 0 0 1.099 0l.99-.39a2.42 2.42 0 0 1 3.102 1.285l.424.975a1.5 1.5 0 0 0 .777.777l.975.424a2.42 2.42 0 0 1 1.285 3.103l-.39.99a1.5 1.5 0 0 0 0 1.098l.39.99a2.42 2.42 0 0 1-1.285 3.102l-.975.424a1.5 1.5 0 0 0-.777.777l-.424.975a2.42 2.42 0 0 1-3.103 1.285l-.99-.39a1.5 1.5 0 0 0-1.098 0l-.99.39a2.42 2.42 0 0 1-3.102-1.285l-.424-.975a1.5 1.5 0 0 0-.777-.777l-.975-.424a2.42 2.42 0 0 1-1.285-3.103l.39-.99a1.5 1.5 0 0 0 0-1.098l-.39-.99a2.42 2.42 0 0 1 1.285-3.102l.975-.424a1.5 1.5 0 0 0 .777-.777l.424-.975a2.42 2.42 0 0 1 3.103-1.285m4.166 5.77l-3.648 4.104l-1.625-1.625a.5.5 0 0 0-.707.707l2 2a.5.5 0 0 0 .727-.021l4-4.5a.5.5 0 0 0-.747-.665"></svg:path>`,
})
export class FluentCheckmarkStarburst20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
