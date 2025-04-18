import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeRocketIcon],svg[icomoon-free-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1L6 6H3l-3 4s3.178-.885 5.032-.47L0 16l6.592-5.127C7.511 12.977 6 16 6 16l4-3v-3l5-5l1-5z"></svg:path>`,
})
export class IcomoonFreeRocketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
