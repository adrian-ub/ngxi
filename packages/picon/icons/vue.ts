import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconVueIcon],svg[picon-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l4 8l4-8M1 0h1l2 4l2-4h1L4 6M3 0h2L4 2"></svg:path>`,
})
export class PiconVueIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
