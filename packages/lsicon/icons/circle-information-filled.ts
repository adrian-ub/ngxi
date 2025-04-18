import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleInformationFilledIcon],svg[lsicon-circle-information-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 3a.75.75 0 1 0 0 1.5A.75.75 0 0 0 8 4M7 7.5h.5V11h-1v1h3v-1h-1V6.5H7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleInformationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
