import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQIcon],svg[mynaui-letter-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.385 16.882V9.471A2.466 2.466 0 0 0 12.923 7h-2.462A2.466 2.466 0 0 0 8 9.47v4.942a2.466 2.466 0 0 0 2.461 2.47zm0 0l-2.462-2.47m2.462 2.47L16 17.5"></svg:path>`,
})
export class MynauiLetterQIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
