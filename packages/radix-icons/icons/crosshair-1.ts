import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsCrosshair1Icon],svg[radix-icons-crosshair-1-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.877 7.502a6.625 6.625 0 1 1 13.25 0a6.625 6.625 0 0 1-13.25 0M1.85 7A5.676 5.676 0 0 1 7 1.849V4.5a.5.5 0 1 0 1 0V1.849A5.68 5.68 0 0 1 13.155 7H10.5a.5.5 0 0 0 0 1h2.656A5.676 5.676 0 0 1 8 13.156V10.5a.5.5 0 0 0-1 0v2.655A5.68 5.68 0 0 1 1.849 8H4.5a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsCrosshair1Icon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
