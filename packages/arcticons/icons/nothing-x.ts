import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNothingXIcon],svg[arcticons-nothing-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.155 28.832L19.168 7.845a8.007 8.007 0 0 0-11.323 0h0a8.007 8.007 0 0 0 0 11.323l20.987 20.987a8.007 8.007 0 0 0 11.323 0h0a8.007 8.007 0 0 0 0-11.323"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.323 24l4.832-4.832a8.007 8.007 0 0 0 0-11.323h0a8.007 8.007 0 0 0-11.323 0l-4.847 4.847M12.677 24l-4.832 4.832a8.007 8.007 0 0 0 0 11.323h0a8.007 8.007 0 0 0 11.323 0l4.817-4.817"></svg:path><svg:circle cx="34.345" cy="34.494" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNothingXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
