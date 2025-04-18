import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riH5Icon],svg[ri-h-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v2h-4.323l-.464 2.636A4.006 4.006 0 0 1 22.25 16.5a4 4 0 0 1-7.846 1.103l1.923-.551a2 2 0 1 0 .363-1.804l-1.81-.904L16 8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4z"></svg:path>`,
})
export class RiH5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
