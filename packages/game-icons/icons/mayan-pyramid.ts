import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsMayanPyramidIcon],svg[game-icons-mayan-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 25v14h78V25zm0 32v46h14V71h50v32h14V57zm32 32v14h14V89zm-64 32v46h30v-46zm48 0v14h46v-14zm64 0v46h30v-46zm-64 32v14h46v-14zm-80 32v46h62v-46zm80 0v14h46v-14zm64 0v46h62v-46zm-64 32v14h46v-14zm-112 32v46h94v-46zm112 0v14h46v-14zm64 0v46h94v-46zm-64 32v14h46v-14zM89 313v46h126v-46zm144 0v14h46v-14zm64 0v46h126v-46zm-64 32v14h46v-14zM57 377v46h158v-46zm176 0v14h46v-14zm64 0v46h158v-46zm-64 32v14h46v-14zM25 441v46h190v-46zm208 0v14h46v-14zm64 0v46h190v-46zm-64 32v14h46v-14z"></svg:path>`,
})
export class GameIconsMayanPyramidIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
