import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUpload1Icon],svg[tdesign-upload-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.586L18.414 9L17 10.414l-4-4V16h-2V6.414l-4 4L5.586 9zM3 18h18v2H3z"></svg:path>`,
})
export class TdesignUpload1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
