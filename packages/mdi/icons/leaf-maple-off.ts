import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLeafMapleOffIcon],svg[mdi-leaf-maple-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.11 14.91L8.2 5H10l2-3l2 3h2l-1.63 4.9L17.79 6l1 1.73l3.6.23l-1.6 3.23l1 1.81zM2.39 1.73L1.11 3l4.34 4.34l-.24.43l-3.6.23l1.6 3.27l-1 1.73L8 16l-1 2l4-.75V21h2v-3.75l2.91.55l4.93 4.93l1.27-1.27z"></svg:path>`,
})
export class MdiLeafMapleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
