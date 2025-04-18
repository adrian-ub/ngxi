import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBinaryTree2FilledIcon],svg[tabler-binary-tree-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a3 3 0 0 1 2.616 4.47l3.274 3.742a3 3 0 1 1-1.505 1.318L13.11 8.787l-.11.042v6.342a3.001 3.001 0 1 1-2 0V8.829l-.111-.041l-3.274 3.742a3 3 0 1 1-1.505-1.318L9.383 7.47A3 3 0 0 1 12 3"></svg:path>`,
})
export class TablerBinaryTree2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
