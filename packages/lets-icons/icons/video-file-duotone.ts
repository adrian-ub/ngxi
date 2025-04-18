import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsVideoFileDuotoneIcon],svg[lets-icons-video-file-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9h-3.5A2.5 2.5 0 0 1 13 6.5zm5.818 5a2 2 0 0 0-.41-.587L14.536 3.58a2 2 0 0 0-.537-.38v3.3A1.5 1.5 0 0 0 15.5 8z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 16.117v-4.234a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43"></svg:path>`,
})
export class LetsIconsVideoFileDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
