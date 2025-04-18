import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaurelWreathRight02Icon],svg[hugeicons-laurel-wreath-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.756 6.611c.213 1.642-1.104 3.166-1.104 3.166s-1.663-1.138-1.877-2.78C13.562 5.353 14.88 3.83 14.88 3.83s1.663 1.139 1.877 2.781m1.56 5.519c-.696 1.503-2.624 2.093-2.624 2.093s-.8-1.847-.104-3.35s2.625-2.094 2.625-2.094s.8 1.848.103 3.351m-4.126 5.884s1.978.394 3.306-.599s1.504-2.998 1.504-2.998s-1.978-.394-3.306.599s-1.504 2.998-1.504 2.998m0 0h-3.198a1.993 1.993 0 1 0 0 3.986H13m-.78-19.032c1.21 1.133 1.164 3.144 1.164 3.144s-2.01.176-3.22-.957S9 2.01 9 2.01s2.01-.175 3.22.958" color="currentColor"></svg:path>`,
})
export class HugeiconsLaurelWreathRight02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
