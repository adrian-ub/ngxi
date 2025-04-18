import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFStop24RegularIcon],svg[fluent-f-stop-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.195 6.528a3.25 3.25 0 0 1 4.268-2.524l.592.205a.75.75 0 1 0 .49-1.418l-.59-.205a4.75 4.75 0 0 0-6.238 3.69l-.722 4.224H6.75a.75.75 0 0 0 0 1.5h3.99l-.783 4.584c-.376 2.202-2.812 3.377-4.77 2.3l-.075-.041a.75.75 0 0 0-.723 1.314l.075.042c2.862 1.574 6.422-.144 6.971-3.363L12.261 12h3.99a.75.75 0 0 0 0-1.5h-3.734z"></svg:path>`,
})
export class FluentFStop24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
