import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBibtexStyleIcon],svg[material-icon-theme-bibtex-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#795548" d="M96 832h832c17.728 0 32 14.272 32 32v64c0 17.728-14.272 32-32 32H96c-17.728 0-32-14.272-32-32v-64c0-17.728 14.272-32 32-32"></svg:path><svg:path fill="#4caf50" d="M160 192h64c17.728 0 32 14.272 32 32v512c0 17.728-14.272 32-32 32h-64c-17.728 0-32-14.272-32-32V224c0-17.728 14.272-32 32-32"></svg:path><svg:path fill="#f44336" d="M512 96c0-17.728-14.272-32-32-32H352c-17.728 0-32 14.272-32 32v640c0 17.728 14.272 32 32 32h128c17.728 0 32-14.272 32-32z"></svg:path><svg:path fill="#ffeb3b" d="M320 192v64h192v-64zm0 384v64h192v-64z"></svg:path><svg:path fill="#bbdefb" d="M608 320h256c17.728 0 32 14.272 32 32v384c0 17.728-14.272 32-32 32H608c-17.728 0-32-14.272-32-32V352c0-17.728 14.272-32 32-32"></svg:path><svg:path fill="#2196f3" d="M608 320c-17.673 0-32 14.327-32 32v352c35.346 0 64-28.654 64-64v-32a32 32 0 0 1 32-32c17.673 0 32-14.327 32-32v-64a32 32 0 0 1 32-32c17.673 0 32-14.327 32-32v-96z"></svg:path><svg:path d="M745.606 339.205L924.74 473.693a15.965 15.965 0 0 1 3.19 22.401a15.965 15.965 0 0 1-22.403 3.19l-179.133-134.49a15.965 15.965 0 0 1-3.19-22.401a15.965 15.965 0 0 1 22.402-3.19z"></svg:path>`,
})
export class MaterialIconThemeBibtexStyleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
