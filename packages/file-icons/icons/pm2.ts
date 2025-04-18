import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPm2Icon],svg[file-icons-pm2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M485.317 146.623H26.682c-35.576 0-35.576-59.374 0-59.374h458.636c35.576 0 35.576 59.374 0 59.374m0 139.064H26.682c-35.576 0-35.576-59.375 0-59.375h458.636c35.576 0 35.576 59.375 0 59.375m0 139.064H26.682c-35.576 0-35.576-59.374 0-59.374h458.636c35.576 0 35.576 59.374 0 59.374"></svg:path>`,
})
export class FileIconsPm2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
