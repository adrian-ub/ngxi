import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilePpt2LineIcon],svg[ri-file-ppt-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.494v20.848a.5.5 0 0 1-.57.494L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99M4 4.735v14.53l10 1.429V3.306zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4zM5 8h8v6H7v2H5zm2 2v2h4v-2z"></svg:path>`,
})
export class RiFilePpt2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
