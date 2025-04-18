import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBinaryTree2Icon],svg[tabler-binary-tree-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m14 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-7 4a2 2 0 1 0-4 0a2 2 0 0 0 4 0M12 8v8m-5.684-3.504l4.368-4.992m7 4.992l-4.366-4.99"></svg:path>`,
})
export class TablerBinaryTree2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
