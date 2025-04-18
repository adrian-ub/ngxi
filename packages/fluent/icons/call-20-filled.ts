import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCall20FilledIcon],svg[fluent-call-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.987 2.066a2 2 0 0 1 2.327.946l.074.149l.662 1.471a2.5 2.5 0 0 1-.442 2.718l-.133.132l-1.043.973c-.188.178-.047.867.633 2.045c.612 1.06 1.11 1.555 1.355 1.582h.043l.053-.01l2.05-.627a1.5 1.5 0 0 1 1.564.441l.091.115l1.357 1.88a2 2 0 0 1-.125 2.497l-.122.126l-.542.514a3.5 3.5 0 0 1-3.715.705c-1.935-.78-3.693-2.562-5.29-5.328c-1.6-2.773-2.265-5.19-1.968-7.26a3.5 3.5 0 0 1 2.261-2.789l.193-.064z"></svg:path>`,
})
export class FluentCall20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
