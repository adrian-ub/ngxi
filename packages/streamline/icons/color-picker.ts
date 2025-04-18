import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineColorPickerIcon],svg[streamline-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.416 1.584a3.493 3.493 0 0 0-4.96 0L2.902 6.137a2.98 2.98 0 0 0-.526 3.502L.84 11.177a.99.99 0 0 0 0 1.399l.585.585a.99.99 0 0 0 1.399 0l1.537-1.537a2.98 2.98 0 0 0 3.503-.526l4.553-4.554a3.494 3.494 0 0 0 0-4.96Zm-7.896-.04l7.936 7.937"></svg:path>`,
})
export class StreamlineColorPickerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
