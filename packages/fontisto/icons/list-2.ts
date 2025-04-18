import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoList2Icon],svg[fontisto-list-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.667 2.666H28A1.334 1.334 0 0 0 28.002 0H6.667a1.334 1.334 0 0 0-.002 2.666zm21.332 2.667H6.666l-.037-.001a1.334 1.334 0 1 0 0 2.668l.039-.001h-.002h21.333a1.334 1.334 0 0 0 .002-2.666zm0 5.334H6.666a1.334 1.334 0 0 0-.002 2.666h21.335a1.334 1.334 0 0 0 .002-2.666zm0 10.666H6.666a1.334 1.334 0 0 0-.002 2.666h21.335a1.334 1.334 0 0 0 .002-2.666zm0-5.333H6.666a1.334 1.334 0 0 0-.002 2.666h21.335A1.334 1.334 0 0 0 28.001 16zM1.334 0h-.002a1.334 1.334 0 1 0 .002 0m0 5.333h-.002a1.334 1.334 0 1 0 .002 0m0 5.334h-.002a1.334 1.334 0 1 0 .002 0m0 10.666h-.002a1.334 1.334 0 1 0 .002 0m0-5.333h-.002a1.334 1.334 0 1 0 .002 0"></svg:path>`,
})
export class FontistoList2Icon {
  readonly viewBox = input("0 0 29 24")
  readonly width = input("1.21em")
  readonly height = input("1em")
}
