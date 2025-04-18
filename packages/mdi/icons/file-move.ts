import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileMoveIcon],svg[mdi-file-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h4v-3l5 4.5l-5 4.5v-3h-4zm-1-8h5.5L13 3.5zM6 2h8l6 6v4.34c-.63-.22-1.3-.34-2-.34a6 6 0 0 0-6 6c0 1.54.58 2.94 1.53 4H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiFileMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
