import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiWhitestarIcon],svg[fxemoji-whitestar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D9DDE8" d="m274.909 31.641l60.046 121.667a21.09 21.09 0 0 0 15.877 11.535l134.267 19.51c17.296 2.513 24.202 23.768 11.687 35.968l-97.157 94.704a21.08 21.08 0 0 0-6.064 18.665l22.936 133.725c2.954 17.226-15.126 30.362-30.596 22.229l-120.092-63.136a21.08 21.08 0 0 0-19.625 0l-120.092 63.136c-15.47 8.133-33.55-5.003-30.596-22.229l22.936-133.725a21.09 21.09 0 0 0-6.064-18.665l-97.157-94.704c-12.517-12.199-5.61-33.454 11.685-35.967l134.267-19.51a21.09 21.09 0 0 0 15.877-11.535L237.09 31.642c7.736-15.673 30.084-15.673 37.819-.001"></svg:path>`,
})
export class FxemojiWhitestarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
