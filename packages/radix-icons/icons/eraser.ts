import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsEraserIcon],svg[radix-icons-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.36.73a.5.5 0 0 1 .708 0l5.203 5.202a.5.5 0 0 1 0 .707l-5.316 5.316l-1.608 1.609a1.5 1.5 0 0 1-2.122 0l-3.789-3.79a1.5 1.5 0 0 1 0-2.12l1.609-1.61zm.354 1.06L4.106 6.398l4.496 4.496l4.608-4.608zm-.82 9.811L3.398 7.107L2.143 8.36a.5.5 0 0 0 0 .708l3.79 3.789a.5.5 0 0 0 .706 0z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsEraserIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
