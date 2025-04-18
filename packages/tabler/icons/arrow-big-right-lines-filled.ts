import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBigRightLinesFilledIcon],svg[tabler-arrow-big-right-lines-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.089 3.634A2 2 0 0 0 11 5.414l-.001 2.585L9 8a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 9 16l1.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434zM3 8a1 1 0 0 1 .993.883L4 9v6a1 1 0 0 1-1.993.117L2 15V9a1 1 0 0 1 1-1m3 0a1 1 0 0 1 .993.883L7 9v6a1 1 0 0 1-1.993.117L5 15V9a1 1 0 0 1 1-1"></svg:path>`,
})
export class TablerArrowBigRightLinesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
