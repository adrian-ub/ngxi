import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAddIcon],svg[tdesign-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z"></svg:path>`,
})
export class TdesignAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
