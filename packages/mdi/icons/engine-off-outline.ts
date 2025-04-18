import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEngineOffOutlineIcon],svg[mdi-engine-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 3.77l4.37 4.37L5 10v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-.73l3.23 3.23l1.27-1.28L3.78 2.5zM16 18h-5l-2-2H7v-5l1-1h.73L16 17.27zm7-9v10h-.18L16 12.18V10h-2.18l-6-6H15v2h-3v2h6v4h2V9z"></svg:path>`,
})
export class MdiEngineOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
