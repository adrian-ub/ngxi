import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiLinkOutlinedIcon],svg[weui-link-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17.657 12l-.849-.849l2.122-2.12a2.8 2.8 0 0 0-3.96-3.96l-3.89 3.888a2.8 2.8 0 0 0 0 3.96l-.848.849a4 4 0 0 1 0-5.657l3.89-3.89a4 4 0 0 1 5.656 5.658zM6.343 12l.849.849l-2.122 2.12a2.8 2.8 0 0 0 3.96 3.96l3.89-3.888a2.8 2.8 0 0 0 0-3.96l.848-.849a4 4 0 0 1 0 5.657l-3.89 3.89a4 4 0 1 1-5.656-5.658z"></svg:path>`,
})
export class WeuiLinkOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
