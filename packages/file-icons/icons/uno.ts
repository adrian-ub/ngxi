import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsUnoIcon],svg[file-icons-uno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M300.522 431.304L512 80.696H211.478L0 431.304z"></svg:path>`,
})
export class FileIconsUnoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
