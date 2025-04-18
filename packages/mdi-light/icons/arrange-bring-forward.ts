import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightArrangeBringForwardIcon],svg[mdi-light-arrange-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9h4v1H9.71l6.71 6.72l-.7.7L9 10.71V13H8zM3 4h12v9l-1-1V5H4v10h7l1 1H3zm17 5v12H8v-3h1v2h10V10h-2V9z"></svg:path>`,
})
export class MdiLightArrangeBringForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
