import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaurelWreathLeft02Icon],svg[hugeicons-laurel-wreath-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.246 6.611c-.213 1.642 1.104 3.166 1.104 3.166s1.663-1.138 1.876-2.78c.213-1.643-1.104-3.167-1.104-3.167S9.46 4.97 9.246 6.611M7.683 12.13c.696 1.503 2.624 2.093 2.624 2.093s.8-1.847.104-3.35s-2.624-2.094-2.624-2.094s-.8 1.848-.104 3.351m4.127 5.884s-1.978.394-3.306-.599S7 14.417 7 14.417s1.978-.394 3.306.599s1.504 2.998 1.504 2.998m0 0h3.198a1.993 1.993 0 0 1 0 3.986H13m.781-19.032c-1.21 1.133-1.164 3.144-1.164 3.144s2.01.176 3.22-.957s1.164-3.145 1.164-3.145s-2.01-.175-3.22.958" color="currentColor"></svg:path>`,
})
export class HugeiconsLaurelWreathLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
