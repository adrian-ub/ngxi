import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiDatabaseIcon],svg[ooui-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h12l2 2v2H2V3zM2 8h16v4H2zm16 9v-2H2v2l2 2h12z"></svg:path>`,
})
export class OouiDatabaseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
