import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatGrapesIcon],svg[fluent-emoji-flat-grapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#608842" d="m3.143 10.067l5.477-2.01a5.835 5.835 0 0 1 7.489 3.466l-5.478 2.01a5.835 5.835 0 0 1-7.488-3.466"></svg:path><svg:path fill="#96C34A" d="M17.495 2.182a1 1 0 0 1 .543 1.306c-.673 1.63-1.488 6.038.834 10.096a1 1 0 1 1-1.736.993c-2.716-4.746-1.78-9.835-.947-11.852a1 1 0 0 1 1.306-.543"></svg:path><svg:path fill="#321B41" d="M27.055 25.828a4.099 4.099 0 1 1-8.197 0a4.099 4.099 0 0 1 8.197 0"></svg:path><svg:path fill="#533566" d="M28.197 19.503a4.099 4.099 0 1 1-8.197 0a4.099 4.099 0 0 1 8.197 0"></svg:path><svg:path fill="#433B6B" d="M24.099 17.287a4.099 4.099 0 1 0 0-8.198a4.099 4.099 0 0 0 0 8.198m-6.165 9.303a4.099 4.099 0 1 0 0-8.197a4.099 4.099 0 0 0 0 8.197"></svg:path><svg:path fill="#533566" d="M16.845 18.373a4.099 4.099 0 1 1-8.197 0a4.099 4.099 0 0 1 8.197 0"></svg:path><svg:path fill="#6B438B" d="M22.439 15.405a4.099 4.099 0 1 1-8.198 0a4.099 4.099 0 0 1 8.198 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatGrapesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
