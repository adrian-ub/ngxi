import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileStarFilledIcon],svg[tabler-file-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12 2l.117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm-.2 9a.39.39 0 0 0-.351.217l-1.086 2.193l-2.428.352a.389.389 0 0 0-.217.665l1.757 1.707l-.415 2.411a.392.392 0 0 0 .568.41l2.172-1.138l2.172 1.138a.39.39 0 0 0 .567-.411l-.414-2.41l1.757-1.707a.39.39 0 0 0-.217-.665l-2.428-.352l-1.086-2.193A.39.39 0 0 0 11.8 11"></svg:path><svg:path d="M19 7h-4l-.001-4.001z"></svg:path></svg:g>`,
})
export class TablerFileStarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
