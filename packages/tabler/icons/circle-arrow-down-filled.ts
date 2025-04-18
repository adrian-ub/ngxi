import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleArrowDownFilledIcon],svg[tabler-circle-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12 7a1 1 0 0 0-1 1v5.585l-2.293-2.292l-.094-.083a1 1 0 0 0-1.32 1.497l4 4q.04.04.094.083l.092.064l.098.052l.081.034l.113.034l.112.02L12 17l.115-.007l.114-.02l.142-.044l.113-.054l.111-.071a1 1 0 0 0 .112-.097l4-4l.083-.094a1 1 0 0 0-1.497-1.32L13 13.584V8l-.007-.117A1 1 0 0 0 12 7"></svg:path>`,
})
export class TablerCircleArrowDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
