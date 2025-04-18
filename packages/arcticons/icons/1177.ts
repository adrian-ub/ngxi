import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1177Icon],svg[arcticons-1177-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.384 20.788l2.639-1.437v10.555M9.5 20.788l2.639-1.437v10.555m10.443 0l5.68-10.555h-6.993M32.82 29.906l5.68-10.555h-6.993"></svg:path>`,
})
export class Arcticons1177Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
