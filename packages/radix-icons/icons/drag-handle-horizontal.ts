import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsDragHandleHorizontalIcon],svg[radix-icons-drag-handle-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4.1a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8zm0 2a.4.4 0 1 0 0 .8h10a.4.4 0 0 0 0-.8zm-.4 2.4c0-.22.18-.4.4-.4h10a.4.4 0 0 1 0 .8h-10a.4.4 0 0 1-.4-.4m.4 1.6a.4.4 0 0 0 0 .8h10a.4.4 0 0 0 0-.8z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsDragHandleHorizontalIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
