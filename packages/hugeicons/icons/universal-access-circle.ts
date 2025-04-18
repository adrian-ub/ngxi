import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUniversalAccessCircleIcon],svg[hugeicons-universal-access-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.063c0 5.93 4.82 10.75 10.75 10.75s10.75-4.82 10.75-10.75S17.93 1.313 12 1.313S1.25 6.133 1.25 12.063m1.5 0c0-5.1 4.15-9.25 9.25-9.25s9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25s-9.25-4.15-9.25-9.25m10.75-5.25a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-3.26 3.845c-.976-.176-1.877-.5-2.63-.955a.76.76 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26c.96.58 2.24.89 3.61.89s2.66-.32 3.61-.89a.751.751 0 1 1 .77 1.29c-.754.45-1.653.775-2.63.953v3.316l.98 3.91a.748.748 0 0 1-.721.93a.76.76 0 0 1-.729-.57l-.86-3.43h-.83l-.86 3.43c-.1.4-.51.65-.91.55s-.65-.51-.55-.91l.98-3.91zM14 18.813h-.009z" color="currentColor"></svg:path>`,
})
export class HugeiconsUniversalAccessCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
