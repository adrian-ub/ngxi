import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileHorizontalFilledIcon],svg[tabler-file-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m22 12l-.007-.117a1 1 0 0 0-.876-.876L21 11h-4l-.15-.005a2 2 0 0 1-1.844-1.838L15 9V5l-.007-.117a1 1 0 0 0-.876-.876L14 4H5a3 3 0 0 0-2.995 2.824L2 7v10a3 3 0 0 0 2.824 2.995L5 20h14a3 3 0 0 0 2.995-2.824L22 17z"></svg:path><svg:path d="M17 5v4l4.001.001z"></svg:path></svg:g>`,
})
export class TablerFileHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
