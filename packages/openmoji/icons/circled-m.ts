import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircledMIcon],svg[openmoji-circled-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="35.958" r="28"></svg:circle><svg:path stroke-linecap="round" d="M45.429 46.458v-22L36 43.315l-9.429-18.857v22"></svg:path></svg:g><svg:circle cx="36" cy="36" r="28" fill="#1e50a0"></svg:circle><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:path stroke-linecap="round" d="M45.429 46.5v-22L36 43.357L26.571 24.5v22"></svg:path></svg:g>`,
})
export class OpenmojiCircledMIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
