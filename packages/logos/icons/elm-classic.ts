import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosElmClassicIcon],svg[logos-elm-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5FB4CB" d="M128 135.022L7.023 256h241.955z"></svg:path><svg:path fill="#EEA400" d="M202.332 195.311L256 248.98V141.643z"></svg:path><svg:path fill="#596277" d="M120.978 128L0 7.022V248.98z"></svg:path><svg:path fill="#5FB4CB" d="M256 113.806V0H142.193z"></svg:path><svg:path fill="#8CD636" d="m195.584 67.434l60.288 60.289l-60.563 60.564l-60.289-60.289zM7.021 0l55.725 55.726h121.129L128.15 0z"></svg:path><svg:path fill="#EEA400" d="m128 120.979l55.322-55.323H72.677z"></svg:path>`,
})
export class LogosElmClassicIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
