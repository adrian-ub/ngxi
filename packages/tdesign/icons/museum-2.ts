import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseum2Icon],svg[tdesign-museum-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1.798l4 2.667v6.355l12-2V22h-6v-4h-2v4H2V4.465zM4 5.535V20h8v-4h6v4h2v-8.82l-12 2V5.536L6 4.202z"></svg:path>`,
})
export class TdesignMuseum2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
