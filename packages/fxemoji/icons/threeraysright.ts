import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiThreeraysrightIcon],svg[fxemoji-threeraysright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#16AFE4" d="M293.886 207.715L26.409 252.496c-3.955.662-3.955 6.345 0 7.007l267.477 44.782a3.552 3.552 0 0 0 4.139-3.504v-89.563a3.552 3.552 0 0 0-4.139-3.503m-85.45-187.22l-183.6 142.611c-3.079 2.392-.614 7.28 3.14 6.226l223.821-62.855a3.553 3.553 0 0 0 2.212-5.02l-40.22-79.756a3.554 3.554 0 0 0-5.353-1.206m43.36 385.029l-223.82-62.856c-3.754-1.054-6.219 3.834-3.14 6.226l183.601 142.612a3.552 3.552 0 0 0 5.351-1.206l40.22-79.756a3.552 3.552 0 0 0-2.212-5.02"></svg:path>`,
})
export class FxemojiThreeraysrightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
