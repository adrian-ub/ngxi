import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLongitudeIcon],svg[mdi-longitude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.03 10.03 0 0 0 12 2M9.4 19.6a8.05 8.05 0 0 1 0-15.2A16.45 16.45 0 0 0 7.5 12a16.45 16.45 0 0 0 1.9 7.6m2.6.4a13.8 13.8 0 0 1-2.5-8A13.8 13.8 0 0 1 12 4a13.8 13.8 0 0 1 2.5 8a13.8 13.8 0 0 1-2.5 8m2.6-.4a16.15 16.15 0 0 0 0-15.2A8.03 8.03 0 0 1 20 12a7.9 7.9 0 0 1-5.4 7.6"></svg:path>`,
})
export class MdiLongitudeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
