import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsDevcontainerIcon],svg[file-icons-devcontainer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127.711 477.547c-170.281-98.17-170.281-344.925 0-443.094S512 59.662 512 256S297.993 575.716 127.711 477.547m123.72-188.214l-89.884-89.884l-28.284 28.284l61.6 61.6l-61.6 61.599l28.284 28.285zm131.927-4.889l-61.6-61.6l61.6-61.599l-28.285-28.284l-89.883 89.883l89.883 89.885z"></svg:path>`,
})
export class FileIconsDevcontainerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
