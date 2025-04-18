import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStamperIcon],svg[mdi-stamper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a3 3 0 0 0-3 3c0 3 5 7-3 7a2 2 0 0 0-2 2v2h16v-2a2 2 0 0 0-2-2c-8 0-3-4-3-7c0-2-1.34-3-3-3M6 19v2h12v-2z"></svg:path>`,
})
export class MdiStamperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
