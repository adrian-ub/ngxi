import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPatreonIcon],svg[file-icons-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 501.505h90.01V10.5H0zm235.696-147.654c-122.432-70.584-122.432-248 0-318.585S512 53.391 512 194.56S358.129 424.434 235.696 353.85"></svg:path>`,
})
export class FileIconsPatreonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
