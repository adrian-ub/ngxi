import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPencilHeartIcon],svg[tabler-pencil-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 11l1.5-1.5a2.828 2.828 0 1 0-4-4L4 16v4h4l2-2m3.5-11.5l4 4M18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071a2.24 2.24 0 0 0-3.129-.006l-.224.22l-.223-.22a2.24 2.24 0 0 0-3.128-.006a2.143 2.143 0 0 0-.006 3.071z"></svg:path>`,
})
export class TablerPencilHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
