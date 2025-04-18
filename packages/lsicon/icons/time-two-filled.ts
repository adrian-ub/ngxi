import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconTimeTwoFilledIcon],svg[lsicon-time-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.5-4v3.793l2.854 2.853l-.708.708L7.5 8.207V4zm0-1V2h-1v1zm0 11v-1h-1v1zM13 7.5h1v1h-1zm-10 0H2v1h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTimeTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
