import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTreeEvergreenDuotoneIcon],svg[ph-tree-evergreen-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m32 192l56-72H48l80-104l80 104h-40l56 72Z" opacity=".2"></svg:path><svg:path d="M230.31 187.09L184.36 128H208a8 8 0 0 0 6.34-12.88l-80-104a8 8 0 0 0-12.68 0l-80 104A8 8 0 0 0 48 128h23.64l-45.95 59.09A8 8 0 0 0 32 200h88v40a8 8 0 0 0 16 0v-40h88a8 8 0 0 0 6.31-12.91M48.36 184l46-59.09A8 8 0 0 0 88 112H64.25L128 29.12L191.75 112H168a8 8 0 0 0-6.31 12.91L207.64 184Z"></svg:path></svg:g>`,
})
export class PhTreeEvergreenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
