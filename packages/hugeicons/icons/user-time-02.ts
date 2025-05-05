import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserTime02Icon],svg[hugeicons-user-time-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m18.5 18.5l-1.5-.6v-2.4m-4 2a4 4 0 1 0 8 0a4 4 0 0 0-8 0m-10 1v-2.03c0-1.242.56-2.46 1.69-2.975c1.378-.629 3.032-.995 4.81-.995c1.054 0 2.065.129 3 .364" color="currentColor"></svg:path>`,
})
export class HugeiconsUserTime02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
