import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCeilingLightMultipleOutlineIcon],svg[mdi-ceiling-light-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.76 13l2 4H9.24l2-4zM15 6h-2v5h-3l-4 8h16l-4-8h-3zm1 14c0 1.11-.89 2-2 2s-2-.89-2-2zm-7.79-9.89L8.76 9H11V2H9v5H6l-4 8h3.76z"></svg:path>`,
})
export class MdiCeilingLightMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
