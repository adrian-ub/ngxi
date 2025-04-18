import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeFilledIcon],svg[lsicon-volume-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1.413v13.174L4.815 11H2V5h2.815zm4.053 1.99a6.5 6.5 0 0 1 0 9.193l-.707-.707a5.5 5.5 0 0 0 0-7.778zm-2.078 2.122a3.5 3.5 0 0 1 0 4.95l-.707-.707a2.5 2.5 0 0 0 0-3.536z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
