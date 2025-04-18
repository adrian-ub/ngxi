import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRhombusSplitIcon],svg[mdi-rhombus-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-3.3 3.29l4.71 4.7l4.71-4.7l-3.3-3.29C13 2.19 12.5 2 12 2M5.88 7.29l-3.29 3.3c-.79.78-.79 2.04 0 2.82l3.29 3.3l4.7-4.71zm12.24 0L13.42 12l4.7 4.71l3.29-3.3c.79-.78.79-2.04 0-2.82zM12 13.42l-4.71 4.7l3.3 3.29c.78.79 2.04.79 2.82 0l3.3-3.29z"></svg:path>`,
})
export class MdiRhombusSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
