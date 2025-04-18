import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile2Icon],svg[subway-file-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325.5 0v128h128zm-21.3 0H69.5v512h384V149.3H304.2zm64 341.3L261.5 448L154.8 341.3h64v-128h85.3v128z"></svg:path>`,
})
export class SubwayFile2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
