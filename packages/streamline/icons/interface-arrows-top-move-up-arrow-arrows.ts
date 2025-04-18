import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTopMoveUpArrowArrowsIcon],svg[streamline-interface-arrows-top-move-up-arrow-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 7.5l3-3l3 3m-3 6v-9M3.5.5h7"></svg:path>`,
})
export class StreamlineInterfaceArrowsTopMoveUpArrowArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
