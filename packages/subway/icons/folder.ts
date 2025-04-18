import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFolderIcon],svg[subway-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M490.7 96H277.3l-10.7-42.7c-1.5-9.2-12-21.3-21.3-21.3H96c-9.3 0-19.8 12.2-21.3 21.3L64 96H21.3C12.1 96 0 108.1 0 117.3v341.3C0 468 12.1 480 21.3 480h469.3c9.3 0 21.3-12 21.3-21.3V117.3C512 108.1 500 96 490.7 96"></svg:path>`,
})
export class SubwayFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
