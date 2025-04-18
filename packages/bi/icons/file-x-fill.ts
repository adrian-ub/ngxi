import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biFileXFillIcon],svg[bi-file-x-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.854 6.146L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707L6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8L6.146 6.854a.5.5 0 1 1 .708-.708"></svg:path>`,
})
export class BiFileXFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
