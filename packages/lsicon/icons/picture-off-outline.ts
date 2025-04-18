import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPictureOffOutlineIcon],svg[lsicon-picture-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.5 13.5h-11v-11m2.13 0h8.87v8.849M2.5 11L5 8.5l3 3l2.103-2.103M13.5 6l-2.693 2.694M1.5 1.5l13 13"></svg:path>`,
})
export class LsiconPictureOffOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
