import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTransferVanSolidIcon],svg[streamline-transfer-van-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.691 7.212l-1.338-2.74a1.5 1.5 0 0 0-1.348-.842h-.438v3.582zm-4.374-4.06a1.5 1.5 0 0 0-1.158-.548H1.702a1.5 1.5 0 0 0-1.5 1.5v6.626a1.5 1.5 0 0 0 1.5 1.5h.304a1.896 1.896 0 0 0 3.784 0h2.553a1.896 1.896 0 0 0 3.787-.187h.166a1.5 1.5 0 0 0 1.5-1.5V8.462H9.942a.625.625 0 0 1-.625-.625z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTransferVanSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
