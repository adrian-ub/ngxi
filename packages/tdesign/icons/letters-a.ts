import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersAIcon],svg[tdesign-letters-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v14h2v-7h6v7zm-2-9H9V6h6z"></svg:path>`,
})
export class TdesignLettersAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
