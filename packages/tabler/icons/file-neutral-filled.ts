import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileNeutralFilledIcon],svg[tabler-file-neutral-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12 2l.117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm2 14h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-3.995-4h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2"></svg:path><svg:path d="M19 7h-4l-.001-4.001z"></svg:path></svg:g>`,
})
export class TablerFileNeutralFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
