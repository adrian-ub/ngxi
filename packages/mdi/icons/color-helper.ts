import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiColorHelperIcon],svg[mdi-color-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 24h24v-4H0z"></svg:path>`,
})
export class MdiColorHelperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
