import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsWdlIcon],svg[file-icons-wdl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.772 192.028L.838 143.648V47.636L84.634 0l82.934 48.379v68.338l66.21 41.31l-35.18 22.616l-45.15-28.428zM0 367.608v96.014L82.935 512l83.796-47.635v-96.013l-82.935-48.38zm272.261-205.109l-83.685 47.635v71.464L127.4 318.013l34.343 23.453l41.841-26.5l67.818 39.56l83.795-47.635v-96.013z"></svg:path>`,
})
export class FileIconsWdlIcon {
  readonly viewBox = input("0 0 356 512")
  readonly width = input("0.7em")
  readonly height = input("1em")
}
