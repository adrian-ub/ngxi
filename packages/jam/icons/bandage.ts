import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBandageIcon],svg[jam-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.697 1.445a4.69 4.69 0 0 1 0 6.635L8.08 18.697a4.692 4.692 0 0 1-6.635-6.635L12.062 1.445a4.69 4.69 0 0 1 6.635 0M17.37 2.772a2.815 2.815 0 0 0-3.981 0L2.772 13.39a2.815 2.815 0 1 0 3.981 3.98L17.37 6.754a2.813 2.813 0 0 0 0-3.98zm-5.972 4.645l1.327 1.327a.94.94 0 0 1 0 1.327l-2.654 2.654a.94.94 0 0 1-1.327 0l-1.327-1.327a.94.94 0 0 1 0-1.327l2.654-2.654a.94.94 0 0 1 1.327 0m.664-.664a.938.938 0 1 1 1.327-1.327a.938.938 0 0 1-1.327 1.327M5.426 13.39a.938.938 0 1 1 1.327-1.327a.938.938 0 0 1-1.327 1.327m9.953-7.3a.938.938 0 1 1 1.327-1.326a.938.938 0 0 1-1.327 1.327zM4.763 16.707A.938.938 0 1 1 6.09 15.38a.938.938 0 0 1-1.327 1.327"></svg:path>`,
})
export class JamBandageIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
