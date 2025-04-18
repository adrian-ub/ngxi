import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomPanFilledIcon],svg[tabler-zoom-pan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a4 4 0 0 1 3.447 6.031l2.26 2.262a1 1 0 0 1-1.414 1.414l-2.262-2.26A4 4 0 0 1 8 12l.005-.2A4 4 0 0 1 12 8m-.707-6.707a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1-1.414 1.414L12 3.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414zm8 8a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L20.585 12l-1.292-1.293a1 1 0 0 1-.083-1.32zm-16 0a1 1 0 1 1 1.414 1.414L3.415 12l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414zm6 10a1 1 0 0 1 1.414 0L12 20.585l1.294-1.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class TablerZoomPanFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
