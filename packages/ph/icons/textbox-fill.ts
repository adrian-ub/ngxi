import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextboxFillIcon],svg[ph-textbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80v96a16 16 0 0 1-16 16h-92a4 4 0 0 1-4-4V68a4 4 0 0 1 4-4h92a16 16 0 0 1 16 16M120 48v160a8 8 0 0 1-16 0v-16H24a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h80V48a8 8 0 0 1 16 0m-32 64a8 8 0 0 0-8-8H48a8 8 0 0 0 0 16h8v24a8 8 0 0 0 16 0v-24h8a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhTextboxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
