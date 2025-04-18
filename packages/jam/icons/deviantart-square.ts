import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDeviantartSquareIcon],svg[jam-deviantart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.254 5.01h-2.072l-.854 1.608a.6.6 0 0 1-.534.317H6.77v2.553h1.637c.182 0 .299.187.215.344L6.77 13.32v1.69h2.069l.853-1.607a.6.6 0 0 1 .534-.316h3.03v-2.554h-1.642a.236.236 0 0 1-.215-.344l1.856-3.495V5.011z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamDeviantartSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
