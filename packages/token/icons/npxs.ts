import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNpxsIcon],svg[token-npxs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.718 12L21 20.282l-.718.718L12 12.717L3.718 21L3 20.282L11.283 12L3 3.718L3.718 3L12 11.283L20.282 3l.718.718z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m9.115 12.001l2.723-2.711l2.71 2.711l-2.71 2.711z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.839 8.572L15.267 12l-3.428 3.428L8.397 12zM9.835 12l2.002 1.995L13.832 12l-1.994-1.994z" clip-rule="evenodd"></svg:path>`,
})
export class TokenNpxsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
