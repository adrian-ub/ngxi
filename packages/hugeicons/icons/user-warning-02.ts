import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserWarning02Icon],svg[hugeicons-user-warning-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M18 20v-2.03c0-1.242-.56-2.46-1.69-2.975c-1.378-.629-3.032-.995-4.81-.995s-3.431.366-4.81.995C5.56 15.51 5 16.728 5 17.97V20M19 6v4m0 3v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsUserWarning02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
