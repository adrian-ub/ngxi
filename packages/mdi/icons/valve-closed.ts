import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiValveClosedIcon],svg[mdi-valve-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20h-2v-9h-5.18a3 3 0 0 1-5.64 0H4v9H2V2h2v9h5.18a3 3 0 0 1 5.64 0H20V2Z"></svg:path>`,
})
export class MdiValveClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
