import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBroom32FilledIcon],svg[fluent-broom-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.293 2.293a1 1 0 1 1 1.414 1.414l-9.34 9.34a7.336 7.336 0 0 1-.66 9.66l-.793.793l-10.39-10.39l.781-.73c2.633-2.62 6.742-2.952 9.647-.746zM6.773 14.187L2.586 16.09a1 1 0 0 0-.293 1.617l12 12a1 1 0 0 0 1.617-.293l1.903-4.187z"></svg:path>`,
})
export class FluentBroom32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
