import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasBulbIcon],svg[pajamas-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.17 8.533C2.21 5.5 4.388 1.5 8 1.5s5.79 4 3.83 7.033L9.592 12H6.408zM5 12.584L2.91 9.347C.305 5.315 3.2 0 8 0s7.694 5.315 5.09 9.347L11 12.584V14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm1.5.916v.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasBulbIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
