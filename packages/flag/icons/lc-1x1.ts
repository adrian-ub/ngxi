import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLc1x1Icon],svg[flag-lc-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#65cfff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="m254.8 44.8l173.5 421.6l-344 1L254.7 44.8z"></svg:path><svg:path fill="#000001" d="m255 103l150 362.6l-297.5.8z"></svg:path><svg:path fill="#ffce00" d="m254.8 256.1l173.5 210.8l-344 .5z"></svg:path></svg:g>`,
})
export class FlagLc1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
