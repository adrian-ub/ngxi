import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laShekelSignIcon],svg[la-shekel-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5v22h2V7h1c3.879 0 7 3.121 7 7v7h2v-7c0-4.957-4.043-9-9-9zm15 0v20h-1c-3.879 0-7-3.121-7-7v-7h-2v7c0 4.957 4.043 9 9 9h3V5z"></svg:path>`,
})
export class LaShekelSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
