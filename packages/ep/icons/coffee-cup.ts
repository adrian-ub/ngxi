import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epCoffeeCupIcon],svg[ep-coffee-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 192a192 192 0 1 1-8 383.808A256.13 256.13 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 64v256a128 128 0 1 0 0-256M96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64m32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192z"></svg:path>`,
})
export class EpCoffeeCupIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
