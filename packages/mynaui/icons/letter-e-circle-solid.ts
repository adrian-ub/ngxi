import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterECircleSolidIcon],svg[mynaui-letter-e-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.25v-2.5h3.25a.75.75 0 0 0 0-1.5h-3.25v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterECircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
