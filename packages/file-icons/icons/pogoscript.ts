import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPogoscriptIcon],svg[file-icons-pogoscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M285.14 0v28.945h-95.388V18.617h-25.74v329.656h-42.883V18.617H95.387v10.328H0V0h95.387v7.897h94.365V0zm-94.864 358.444H94.864v-20.37H5.884v21.442h17.153v20.369h105.06v99.954h-8.307V512h45.56v-32.161h-8.307v-99.954h105.06v-20.37h17.153v-21.44h-88.98z"></svg:path>`,
})
export class FileIconsPogoscriptIcon {
  readonly viewBox = input("0 0 286 512")
  readonly width = input("0.56em")
  readonly height = input("1em")
}
