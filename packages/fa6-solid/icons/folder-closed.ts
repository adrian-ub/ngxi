import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFolderClosedIcon],svg[fa6-solid-folder-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 480H64c-35.3 0-64-28.7-64-64V192h512v224c0 35.3-28.7 64-64 64m64-320H0V96c0-35.3 28.7-64 64-64h128c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8h160c35.3 0 64 28.7 64 64"></svg:path>`,
})
export class Fa6SolidFolderClosedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
