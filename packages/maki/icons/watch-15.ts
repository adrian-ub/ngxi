import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiWatch15Icon],svg[maki-watch-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12.5 7H12c-.018 0-.032.008-.05.01A4.485 4.485 0 0 0 10 3.76V1.498A.498.498 0 0 0 9.502 1H5.498A.498.498 0 0 0 5 1.498V3.76c-1.205.807-2 2.18-2 3.74s.795 2.933 2 3.74v2.262c0 .275.223.498.498.498h4.004a.498.498 0 0 0 .498-.498V11.24a4.485 4.485 0 0 0 1.95-3.25c.018.002.033.01.05.01h.5a.5.5 0 0 0 0-1zm-5 4a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7z" fill="currentColor"></svg:path><svg:path d="M9 7H8V5.5a.5.5 0 1 0-1 0v2a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 0-1z" fill="currentColor"></svg:path>`,
})
export class MakiWatch15Icon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
