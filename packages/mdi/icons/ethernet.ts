import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEthernetIcon],svg[mdi-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h2v3h2v-3h2v3h2v-3h2v3h2V9h-4V6H9v3H5v9h2zM4.38 3h15.25A2.37 2.37 0 0 1 22 5.38v14.25A2.37 2.37 0 0 1 19.63 22H4.38A2.37 2.37 0 0 1 2 19.63V5.38C2 4.06 3.06 3 4.38 3"></svg:path>`,
})
export class MdiEthernetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
