import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFileSymlinkFileIcon],svg[codicon-file-symlink-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.57 1.14l3.28 3.3l.15.36v9.7l-.5.5H10v-1h3V6H9.5L9 5.5V2H3v4H2V1.5l.5-.5h7.72zM10 5h3l-3-3zM8.5 7h-7l-.5.5v7l.5.5h7l.5-.5v-7zM8 14H2V8h6zM7 9.5v3H6v-1.793l-2.646 2.647l-.708-.708L5.293 10H3.53V9H6.5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconFileSymlinkFileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
