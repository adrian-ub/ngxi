import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feAlignBottomIcon],svg[fe-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.8 19h14.4c.442 0 .8.448.8 1s-.358 1-.8 1H4.8c-.442 0-.8-.448-.8-1s.358-1 .8-1m6.2-4a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0zm6 0a2 2 0 1 1-4 0V9a2 2 0 1 1 4 0z"></svg:path>`,
})
export class FeAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
