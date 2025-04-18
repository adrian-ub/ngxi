import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPanIcon],svg[file-icons-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M488.401 47.197H23.6V0h464.802zm0 45.763H23.6v47.198h464.802zM209.52 185.92H23.6v47.198h185.92zm278.881 0h-185.92v47.198H488.4zM209.52 278.88H23.6v47.198h185.92zm278.881 0h-185.92v47.198H488.4zm0 92.962H23.6v47.197h464.802zm-278.881 92.96H23.6V512h185.92zm278.881 0h-185.92V512H488.4z"></svg:path>`,
})
export class FileIconsPanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
