import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMigrateFlasherIcon],svg[arcticons-migrate-flasher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 41.03L43.5 24L4.5 6.97m39.082 21.067l-9.143 4.318l6.729 5.047l-9.729 3.628"></svg:path>`,
})
export class ArcticonsMigrateFlasherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
