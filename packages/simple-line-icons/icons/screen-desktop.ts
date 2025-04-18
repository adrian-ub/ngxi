import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsScreenDesktopIcon],svg[simple-line-icons-screen-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 95.808H64c-35.184 0-64 28.8-64 64V704c0 35.184 28.816 63.983 64 63.983h416v96.208H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h384c17.664 0 32-14.336 32-32s-14.336-32-32-32H544v-96.208h416c35.184 0 64-28.8 64-63.983V159.808c0-35.2-28.816-64-64-64M960 704H64V159.808h896z"></svg:path>`,
})
export class SimpleLineIconsScreenDesktopIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
