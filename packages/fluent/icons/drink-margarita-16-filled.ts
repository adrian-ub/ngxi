import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDrinkMargarita16FilledIcon],svg[fluent-drink-margarita-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.587 1.992a.5.5 0 0 0-.174-.984l-4.25.75a.5.5 0 0 0-.401.384L8.572 3H3.5a.5.5 0 0 0-.5.5v3a2 2 0 0 0 2 2a3 3 0 0 0 2.502 2.959L7.5 11.5V14h-2a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-2v-2.5l-.002-.041A3 3 0 0 0 11 8.5a2 2 0 0 0 2-2v-3a.5.5 0 0 0-.5-.5H9.596l.07-.316zM8.349 4l-.222 1H4V4zM12 5H9.151l.222-1H12z"></svg:path>`,
})
export class FluentDrinkMargarita16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
