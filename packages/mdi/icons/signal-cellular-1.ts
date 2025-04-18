import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignalCellular1Icon],svg[mdi-signal-cellular-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 5.5v13h-2v-13zm-7 5v8h-2v-8zM21 4h-5v16h5zm-7 5H9v11h5zm-7 5H2v6h5z"></svg:path>`,
})
export class MdiSignalCellular1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
