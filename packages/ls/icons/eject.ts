import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsEjectIcon],svg[ls-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.483 380l274-343c26-31 66-31 91 0l274 343c26 32 14 57-27 57h-585c-40 0-53-25-27-57m37 308h565c28 0 51-22 51-51v-67c0-28-23-50-51-50h-565c-28 0-50 22-50 50v67c0 29 22 51 50 51"></svg:path>`,
})
export class LsEjectIcon {
  readonly viewBox = input("0 0 667 688")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
