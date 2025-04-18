import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOciIcon],svg[mdi-oci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h20V2m-2.88 17.03H4.87V5h14.26v14.03m-4.3-8.32h2.86v6.88h-2.86m0-11.18h2.86v2.86h-2.86M6.3 6.41v11.18h7.1v-2.87H9.17V9.28h4.23V6.41Z"></svg:path>`,
})
export class MdiOciIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
