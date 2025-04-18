import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1PageIcon],svg[emojione-v1-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d1d2" d="M7.323 58.23c0 3 2.676 5.434 5.985 5.434h38.17c3.303 0 5.985-2.431 5.985-5.434V9.266c0-3-2.683-5.432-5.985-5.432h-38.17c-3.31 0-5.985 2.431-5.985 5.432z"></svg:path><svg:path fill="#e7e6e6" d="M7.323 54.4c0 3 2.676 5.434 5.985 5.434h38.17c3.303 0 5.985-2.433 5.985-5.434V5.435c.001-3-2.682-5.432-5.985-5.432h-38.17c-3.31 0-5.985 2.431-5.985 5.432z"></svg:path><svg:path fill="#35494d" d="M49.919 13.159H15.961c-2.287 0-2.287-3.211 0-3.211h33.958c2.28-.001 2.28 3.211 0 3.211m0 6.518H15.961c-2.287 0-2.287-3.209 0-3.209h33.958c2.28 0 2.28 3.209 0 3.209m0 6.663H15.961c-2.287 0-2.287-3.211 0-3.211h33.958c2.28 0 2.28 3.211 0 3.211m0 6.519H15.961c-2.287 0-2.287-3.212 0-3.212h33.958c2.28 0 2.28 3.212 0 3.212m0 12.581H34.288c-2.277 0-2.277-3.211 0-3.211h15.631c2.28.001 2.28 3.211 0 3.211"></svg:path>`,
})
export class EmojioneV1PageIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
