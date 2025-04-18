import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSiloIcon],svg[mdi-home-silo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 7.8C23.6 4.5 20.9 2 17.5 2c-1.7 0-3.4.7-4.6 1.9c-.7.7-1.2 1.4-1.5 2.3L17 9.9v.1h3v2h-3v2h3v2h-3v2h3v2h-3v2h7zM13.3 7c.6-1.8 2.3-3 4.2-3s3.6 1.2 4.2 3zM0 11v11h5v-7h5v7h5V11L7.5 6z"></svg:path>`,
})
export class MdiHomeSiloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
