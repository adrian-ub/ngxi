import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAlacrittyIcon],svg[file-icons-alacritty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M175.09 330.675L224.098 512l49.007-181.325l-49.007-118.74zM182.816 0h82.563l182.816 453.723H371.53l-147.432-346.54l-147.433 346.54H0z"></svg:path>`,
})
export class FileIconsAlacrittyIcon {
  readonly viewBox = input("0 0 449 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
