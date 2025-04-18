import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMapMarkerAlertIcon],svg[mdi-map-marker-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.9 0 7 3.1 7 7c0 5.2-7 13-7 13S5 14.2 5 9c0-3.9 3.1-7 7-7m-1 4v6h2V6zm0 8v2h2v-2z"></svg:path>`,
})
export class MdiMapMarkerAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
