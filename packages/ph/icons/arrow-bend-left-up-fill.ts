import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftUpFillIcon],svg[ph-arrow-bend-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 224a8 8 0 0 1-8 8A104.11 104.11 0 0 1 96 128V88H56a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 152 88h-40v40a88.1 88.1 0 0 0 88 88a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhArrowBendLeftUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
