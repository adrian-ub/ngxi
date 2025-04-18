import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPyupIcon],svg[file-icons-pyup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128.083v253.776l89.629 52.571l.004-255.146l132.247-75.759l63.99 38.222V36.696L221.704 0zm354.21 203.912l-132.332 73.393l-63.33-33.031v102.497L221.877 512L443 381.858V126.565L354.21 75.83zm-132.347-3.113l64.006-36.629v-74.58l-64.345-35.65l-63.64 36.233v74.19z"></svg:path>`,
})
export class FileIconsPyupIcon {
  readonly viewBox = input("0 0 443 512")
  readonly width = input("0.87em")
  readonly height = input("1em")
}
