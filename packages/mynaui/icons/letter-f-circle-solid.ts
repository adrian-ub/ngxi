import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterFCircleSolidIcon],svg[mynaui-letter-f-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-4.75A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-3.25h3.25a.75.75 0 0 0 0-1.5H10.5v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterFCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
