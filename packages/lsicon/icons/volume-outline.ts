import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeOutlineIcon],svg[lsicon-volume-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.7 12.243a6 6 0 0 0 0-8.486m-2.079 6.364a3 3 0 0 0 0-4.242M2.5 5.5H5l3.5-3v11l-3.5-3H2.5z"></svg:path>`,
})
export class LsiconVolumeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
