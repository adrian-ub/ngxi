import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDownloadCircleIcon],svg[mdi-download-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2M8 17h8v-2H8zm8-7h-2.5V6h-3v4H8l4 4z"></svg:path>`,
})
export class MdiDownloadCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
