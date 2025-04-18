import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerDownRightSolidIcon],svg[mynaui-fat-corner-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.309 3.504A.75.75 0 0 0 12.997 4v4.382c-1.255.138-2.576.057-3.969-.252c-1.434-.318-3.25-1.722-5.438-4.515a.75.75 0 0 0-1.336.535c.32 3.311 1.536 6.112 3.661 8.365c1.963 2.08 4.334 3.228 7.082 3.422V20a.75.75 0 0 0 1.299.511l7.253-7.786a.75.75 0 0 0 .013-1.008z"></svg:path>`,
})
export class MynauiFatCornerDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
