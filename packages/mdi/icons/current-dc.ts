import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCurrentDcIcon],svg[mdi-current-dc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9v2h20V9zm0 4v2h5v-2zm7 0v2h6v-2zm8 0v2h5v-2z"></svg:path>`,
})
export class MdiCurrentDcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
