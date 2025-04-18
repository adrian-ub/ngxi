import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCut1Icon],svg[tdesign-cut-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v2.5h-2V1zm8.414 2.5L15 9.914L13.586 8.5L20 2.086zM4 2.086l11.968 11.968a4.001 4.001 0 0 1 4.86 6.274a4 4 0 0 1-6.274-4.86L12 12.914l-2.554 2.554a4.002 4.002 0 0 1-6.274 4.86a4 4 0 0 1 4.86-6.274l2.554-2.554l-8-8zM13 5v2.5h-2V5zM7.414 16.086a2 2 0 1 0-2.828 2.828a2 2 0 0 0 2.828-2.828m12 0a2 2 0 1 0-2.828 2.828a2 2 0 0 0 2.828-2.828"></svg:path>`,
})
export class TdesignCut1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
