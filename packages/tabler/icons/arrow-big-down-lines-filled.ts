import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBigDownLinesFilledIcon],svg[tabler-arrow-big-down-lines-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 8l-.117.007A1 1 0 0 0 8 9v1.999L5.414 11A2 2 0 0 0 4 14.414L10.586 21a2 2 0 0 0 2.828 0L20 14.414a2 2 0 0 0 .434-2.18l-.068-.145A2 2 0 0 0 18.586 11L16 10.999V9a1 1 0 0 0-1-1zm6-6a1 1 0 0 1 .117 1.993L15 4H9a1 1 0 0 1-.117-1.993L9 2zm0 3a1 1 0 0 1 .117 1.993L15 7H9a1 1 0 0 1-.117-1.993L9 5z"></svg:path>`,
})
export class TablerArrowBigDownLinesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
