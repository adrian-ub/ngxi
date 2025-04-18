import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLaptopIcon],svg[zmdi-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 320h85v43H0v-43h85q-17 0-29.5-12.5T43 277V64q0-18 12.5-30.5T85 21h342q17 0 29.5 12.5T469 64v213q0 18-12.5 30.5T427 320M85 64v213h342V64z"></svg:path>`,
})
export class ZmdiLaptopIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
