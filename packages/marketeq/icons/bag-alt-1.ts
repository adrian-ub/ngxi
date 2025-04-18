import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBagAlt1Icon],svg[marketeq-bag-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 35.417v-8.334M25 35.417v-8.334zm-8.333 0v-8.334z"></svg:path><svg:path stroke="#306CFE" d="m31.25 6.25l4.167 12.5m2.395 25H12.189A2.08 2.08 0 0 1 10.104 42L6.25 18.75h37.5L39.875 42a2.08 2.08 0 0 1-2.062 1.75M18.75 6.25l-4.167 12.5z"></svg:path></svg:g>`,
})
export class MarketeqBagAlt1Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
