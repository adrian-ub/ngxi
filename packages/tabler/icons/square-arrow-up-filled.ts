import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareArrowUpFilledIcon],svg[tabler-square-arrow-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-7 5l-.09.004l-.058.007l-.118.025l-.105.035l-.113.054l-.111.071a1 1 0 0 0-.112.097l-4 4l-.083.094a1 1 0 0 0 .083 1.32l.094.083a1 1 0 0 0 1.32-.083L11 10.415V16l.007.117A1 1 0 0 0 13 16v-5.585l2.293 2.292l.094.083a1 1 0 0 0 1.32-1.497l-4-4l-.082-.073l-.104-.074l-.098-.052l-.11-.044l-.112-.03l-.126-.017z"></svg:path>`,
})
export class TablerSquareArrowUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
