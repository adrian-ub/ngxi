import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUploadIcon],svg[tdesign-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.586L17.914 8.5L16.5 9.914l-3.5-3.5V16h-2V6.414l-3.5 3.5L6.086 8.5zM4.5 14v5h15v-5h2v7h-19v-7z"></svg:path>`,
})
export class TdesignUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
