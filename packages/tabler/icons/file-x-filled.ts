import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileXFilledIcon],svg[tabler-file-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12 2l.117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm-1.489 9.14a1 1 0 0 0-1.301 1.473l.083.094L10.585 14l-1.292 1.293l-.083.094a1 1 0 0 0 1.403 1.403l.094-.083L12 15.415l1.293 1.292l.094.083a1 1 0 0 0 1.403-1.403l-.083-.094L13.415 14l1.292-1.293l.083-.094a1 1 0 0 0-1.403-1.403l-.094.083L12 12.585l-1.293-1.292l-.094-.083z"></svg:path><svg:path d="M19 7h-4l-.001-4.001z"></svg:path></svg:g>`,
})
export class TablerFileXFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
