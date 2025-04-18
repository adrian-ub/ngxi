import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSaveEdit24FilledIcon],svg[fluent-save-edit-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3h-1A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21H6v-6a2.25 2.25 0 0 1 2.25-2.25h7.353l1.788-1.788A3.28 3.28 0 0 1 19.713 10h.002c.437 0 .875.087 1.285.261V8.287a3.25 3.25 0 0 0-.952-2.299l-2.035-2.035A3.25 3.25 0 0 0 15.75 3v4.5a2.25 2.25 0 0 1-2.25 2.25H9A2.25 2.25 0 0 1 6.75 7.5zm7.353 11.25l-2.615 2.615a3.7 3.7 0 0 0-.969 1.712l-.458 1.83Q9.986 20.71 10 21H7.5v-6a.75.75 0 0 1 .75-.75zM14.25 3v4.5a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V3zm5.465 8h-.002c-.585 0-1.17.223-1.615.67l-5.902 5.902a2.7 2.7 0 0 0-.707 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.285 2.285 0 0 0 19.715 11"></svg:path>`,
})
export class FluentSaveEdit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
