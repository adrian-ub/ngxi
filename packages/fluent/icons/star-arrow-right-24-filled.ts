import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarArrowRight24FilledIcon],svg[fluent-star-arrow-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M10.79 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777l5.272.766c1.108.161 1.55 1.522.749 2.303l-.906.883a6.5 6.5 0 0 0-9.442 7.43l-3.958 2.08c-.99.521-2.147-.32-1.958-1.423l.9-5.25l-3.815-3.72c-.801-.78-.359-2.142.748-2.303l5.273-.766l2.358-4.777z" fill="currentColor"></svg:path><svg:path d="M23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0zm-8.5-.5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 17H14.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentStarArrowRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
