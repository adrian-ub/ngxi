import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowRightRhombusFilledIcon],svg[tabler-arrow-right-rhombus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.707 8.293l3 3l.097.112l.071.11l.031.062l.034.081l.024.076l.03.148L22 12l-.004.085l-.016.116l-.03.111l-.044.111l-.052.098l-.074.104l-.073.082l-3 3a1 1 0 0 1-1.414-1.414L18.585 13H8.414l-2.207 2.207a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0L8.415 11h10.17l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class TablerArrowRightRhombusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
