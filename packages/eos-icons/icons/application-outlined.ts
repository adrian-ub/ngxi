import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsApplicationOutlinedIcon],svg[eos-icons-application-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="eosIconsApplicationOutlined0" fill="currentColor" d="m9 18l.7-.7l.7-.7l-1.3-1.3L7.8 14l1.3-1.3l1.3-1.3l-.7-.7L9 10l-2 2l-2 2l2 2zm4.6-1.4l.7.7l.7.7l2-2l2-2l-2-2l-2-2l-.7.7l-.7.7l1.3 1.3l1.3 1.3l-1.3 1.3z"></svg:path></svg:defs><svg:path fill="currentColor" d="M1 3v2h22V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2m3.007 1.008a1 1 0 1 1 .999-1a1 1 0 0 1-1 1m2.997-.001a1 1 0 1 1 1-1a1 1 0 0 1-1 1M1 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6Zm20 14H3V8h18Z"></svg:path><svg:use href="#eosIconsApplicationOutlined0"></svg:use><svg:use href="#eosIconsApplicationOutlined0"></svg:use>`,
})
export class EosIconsApplicationOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
