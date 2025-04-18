import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDCircleSolidIcon],svg[mynaui-letter-d-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25h-1.75v-6.5H12a2.75 2.75 0 0 1 2.75 2.75v1A2.75 2.75 0 0 1 12 15.25"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M10 7.25c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h2a4.25 4.25 0 0 0 4.25-4.25v-1A4.25 4.25 0 0 0 12 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterDCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
