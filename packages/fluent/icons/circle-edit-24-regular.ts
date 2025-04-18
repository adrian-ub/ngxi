import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleEdit24RegularIcon],svg[fluent-circle-edit-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 3.5a8.5 8.5 0 0 0-.705 16.971l-.234.936a2 2 0 0 0-.064.543C5.945 21.447 2 17.184 2 12C2 6.477 6.477 2 12 2c5.27 0 9.589 4.077 9.972 9.25a3.3 3.3 0 0 0-1.257-.25h-.002q-.135 0-.27.011A8.5 8.5 0 0 0 12 3.5"></svg:path><svg:path d="M20.715 12h-.002c-.585 0-1.17.223-1.615.67l-5.902 5.902a2.7 2.7 0 0 0-.707 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.285 2.285 0 0 0 20.715 12"></svg:path></svg:g>`,
})
export class FluentCircleEdit24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
