import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQDiamondSolidIcon],svg[mynaui-letter-q-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l.72.72H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M15.75 10v5.69l.28.28a.75.75 0 1 1-1.06 1.06l-.28-.28H11A2.75 2.75 0 0 1 8.25 14v-4A2.75 2.75 0 0 1 11 7.25h2A2.75 2.75 0 0 1 15.75 10"></svg:path></svg:g>`,
})
export class MynauiLetterQDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
