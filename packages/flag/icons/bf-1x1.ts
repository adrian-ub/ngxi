import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBf1x1Icon],svg[flag-bf-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#de0000" d="M512 511.6H.5V0H512z"></svg:path><svg:path fill="#35a100" d="M511.8 512H0V256.2h511.7z"></svg:path></svg:g><svg:path fill="#fff300" fill-rule="evenodd" d="m389 223.8l-82.9 56.5l31.7 91.6l-82.7-56.7l-82.8 56.7l31.7-91.6l-82.8-56.6l102.3.2l31.6-91.7l31.5 91.6"></svg:path>`,
})
export class FlagBf1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
