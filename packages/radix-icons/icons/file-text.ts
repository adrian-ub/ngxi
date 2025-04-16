import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsFileTextIcon],svg[radix-icons-file-text-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5-.5h5.586a.5.5 0 0 1 .353.146l2.415 2.415a.5.5 0 0 1 .146.353V12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v10A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V4.914a1.5 1.5 0 0 0-.44-1.06l-2.414-2.415A1.5 1.5 0 0 0 9.086 1zm1 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsFileTextIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
