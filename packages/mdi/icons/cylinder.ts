import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCylinderIcon],svg[mdi-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-2.11 0-9 .29-9 4v12c0 3.71 6.89 4 9 4s9-.29 9-4V6c0-3.71-6.89-4-9-4m0 8c1.38 0 4.8-.13 7-1.25v6.5C16.8 14.13 13.38 14 12 14s-4.8.13-7 1.25v-6.5C7.2 9.87 10.62 10 12 10m0-6c3.87 0 7 .89 7 2s-3.13 2-7 2s-7-.89-7-2s3.13-2 7-2m0 16c-3.87 0-7-.89-7-2c0-1.1 3.13-2 7-2s7 .9 7 2c0 1.11-3.13 2-7 2"></svg:path>`,
})
export class MdiCylinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
