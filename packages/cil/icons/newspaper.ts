import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilNewspaperIcon],svg[cil-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 72v316a20 20 0 0 1-40 0V152H16v236a52.06 52.06 0 0 0 52 52h376a52.06 52.06 0 0 0 52-52V72Zm376 316a20.023 20.023 0 0 1-20 20H116a51.7 51.7 0 0 0 4-20V104h344Z"></svg:path><svg:path fill="currentColor" d="M296 136H152v160h144Zm-32 128h-80v-96h80Zm64-128h104v32H328zm0 64h104v32H328zm0 64h104v32H328z"></svg:path>`,
})
export class CilNewspaperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
