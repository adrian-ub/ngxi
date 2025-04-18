import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOpenNewFilledIcon],svg[lsicon-open-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 4H12v6.5h-1V5.707l-6.146 6.147l-.708-.708L10.293 5H5.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOpenNewFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
