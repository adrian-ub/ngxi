import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCh1x1Icon],svg[flag-ch-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="red" d="M0 0h512v512H0z"></svg:path><svg:g fill="#fff"><svg:path d="M96 208h320v96H96z"></svg:path><svg:path d="M208 96h96v320h-96z"></svg:path></svg:g></svg:g>`,
})
export class FlagCh1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
