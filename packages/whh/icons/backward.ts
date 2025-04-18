import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBackwardIcon],svg[whh-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M962 1014L527 551q-15-16-15-38.5t15-37.5L962 11q25-26 62 14v977q-37 39-62 12m-512 0L15 551Q0 535 0 512.5T15 475L450 11q25-26 62 14v977q-37 39-62 12"></svg:path>`,
})
export class WhhBackwardIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
