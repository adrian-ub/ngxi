import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsOpenFolderIcon],svg[game-icons-open-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41 73v304.563L88.697 151H423v-30H185.514l-16-48zm62.303 96L43.092 455h381.605l60.211-286z"></svg:path>`,
})
export class GameIconsOpenFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
