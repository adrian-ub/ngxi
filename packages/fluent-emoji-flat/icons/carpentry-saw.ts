import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCarpentrySawIcon],svg[fluent-emoji-flat-carpentry-saw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B4ACBC" d="M15.5 25.75h2.75l5.55-8.7L9 2.25c-.5-.5-1-.254-1.5.25l-4 4c-.5.504-.25.75.5 1S5.004 8 5.002 10C5 10.5 6.5 11 6.5 11s.75.25.75 1v1.25s.035.734 1.75 1.5c0 0 .5.25.5.75c0 2 .5 2.25.5 2.25l1.5.75s.5.25.5.5c0 1.5 0 2.25.5 2.496c0 0 2 .754 2 1.254V25c0 .5.5.75 1 .75"></svg:path><svg:path fill="#7D4533" d="m29 22.25l-5.246-5.246h-.004C23 16.25 22.5 16.25 22 16.5c-.574.32-3 3-3 3s-.754.75-.75 1.25V26L22 29.75c.5.5 1 .25 1.5-.25L29 24s1-.875 0-1.75m-3.19-.19a1.5 1.5 0 0 1 0 2.122l-2.12 2.121a1.5 1.5 0 1 1-2.122-2.121l2.121-2.121a1.5 1.5 0 0 1 2.122 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatCarpentrySawIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
