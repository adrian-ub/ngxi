import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFemaleSolidIcon],svg[mynaui-female-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a6.75 6.75 0 0 0-.75 13.459v2.541H10a.75.75 0 0 0 0 1.5h1.25V21a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5h-1.25v-2.541A6.751 6.751 0 0 0 12 2.25"></svg:path>`,
})
export class MynauiFemaleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
