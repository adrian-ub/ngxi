import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsMomentIcon],svg[file-icons-moment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M242.162 62.365v179.797h-96.906c-18.563.719-18.096 27.017-.022 27.676h124.604V62.282c-.542-18.233-26.93-18.233-27.676.083m-97.115 385.243c-147.27-84.903-147.27-298.313 0-383.216S477.405 86.194 477.405 256S292.318 532.511 145.047 447.608M512 256C512 59.662 297.992-63.716 127.711 34.453s-170.281 344.925 0 443.094S512 452.338 512 256"></svg:path>`,
})
export class FileIconsMomentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
