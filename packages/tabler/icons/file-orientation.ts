import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileOrientationIcon],svg[tabler-file-orientation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 3v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M10 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v2m-6 10h5a2 2 0 0 0 2-2v-5"></svg:path><svg:path d="m15 22l-2-2l2-2m3-3l2-2l2 2"></svg:path></svg:g>`,
})
export class TablerFileOrientationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
