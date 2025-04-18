import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPen48FilledIcon],svg[fluent-pen-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.206 6.025a6.907 6.907 0 1 1 9.768 9.767l-2.234 2.236l.935.998a4.25 4.25 0 0 1-.095 5.912l-3.446 3.446a1.25 1.25 0 0 1-1.768-1.768l3.446-3.446a1.75 1.75 0 0 0 .04-2.435l-.881-.939l-20.165 20.168a6 6 0 0 1-2.76 1.572L5.56 43.961a1.25 1.25 0 0 1-1.521-1.521l2.427-9.485a6 6 0 0 1 1.572-2.758z"></svg:path>`,
})
export class FluentPen48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
