import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowAutofitUp20FilledIcon],svg[fluent-arrow-autofit-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.712 5.233l-.71-.735V17.25a.75.75 0 1 1-1.5 0V4.494l-.713.739a.75.75 0 0 1-1.078-1.042l1.82-1.886a1 1 0 0 1 1.44 0l1.82 1.886a.75.75 0 0 1-1.079 1.042M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.25a.75.75 0 0 0 0-1.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentArrowAutofitUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
