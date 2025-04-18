import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPhotoSizeSelectSmallIcon],svg[zmdi-photo-size-select-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 256v43h-42v-43zm0-85v42h-42v-42zm0 170q0 16-13 29.5T427 384v-43zM299 0v43h-43V0zm170 85v43h-42V85zM427 0q16 0 29 13.5T469 43h-42zM43 384q-18 0-30.5-12.5T0 341v-85h213v128zm0-299v43H0V85zm256 256v43h-43v-43zM384 0v43h-43V0zm0 341v43h-43v-43zM43 0v43H0q0-16 13.5-29.5T43 0m0 171v42H0v-42zM213 0v43h-42V0zm-85 0v43H85V0z"></svg:path>`,
})
export class ZmdiPhotoSizeSelectSmallIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
