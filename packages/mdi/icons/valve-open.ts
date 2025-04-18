import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiValveOpenIcon],svg[mdi-valve-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2m18 0h-2v20h2M11 4v5.18a3 3 0 0 0 0 5.64V20h2v-5.18a3 3 0 0 0 0-5.64V4Z"></svg:path>`,
})
export class MdiValveOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
