import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiWarningIcon],svg[twemoji-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCC4D" d="M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972z"></svg:path><svg:path fill="#231F20" d="M15.583 28.953a2.42 2.42 0 0 1 2.419-2.418a2.42 2.42 0 0 1 2.418 2.418a2.42 2.42 0 0 1-2.418 2.419a2.42 2.42 0 0 1-2.419-2.419m.186-18.293c0-1.302.961-2.108 2.232-2.108c1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108c-1.271 0-2.232-.807-2.232-2.108z"></svg:path>`,
})
export class TwemojiWarningIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
