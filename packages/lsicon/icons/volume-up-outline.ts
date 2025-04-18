import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeUpOutlineIcon],svg[lsicon-volume-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10 8h4m-2-2v4M2.5 5.5H5l3.5-3v11l-3.5-3H2.5z"></svg:path>`,
})
export class LsiconVolumeUpOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
