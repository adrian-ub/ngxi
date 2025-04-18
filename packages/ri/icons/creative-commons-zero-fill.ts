import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCreativeCommonsZeroFillIcon],svg[ri-creative-commons-zero-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 4c-2.761 0-5 2.686-5 6s2.239 6 5 6s5-2.686 5-6s-2.239-6-5-6m2.325 3.472c.422.69.675 1.57.675 2.528c0 2.21-1.343 4-3 4c-.441 0-.86-.127-1.237-.355zM12 8c.441 0 .86.127 1.237.355l-3.562 6.173C9.253 13.838 9 12.958 9 12c0-2.21 1.343-4 3-4"></svg:path>`,
})
export class RiCreativeCommonsZeroFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
