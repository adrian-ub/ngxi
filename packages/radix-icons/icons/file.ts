import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsFileIcon],svg[radix-icons-file-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2zm5.5.707L11.293 5H9zM2 2.5A1.5 1.5 0 0 1 3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsFileIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
