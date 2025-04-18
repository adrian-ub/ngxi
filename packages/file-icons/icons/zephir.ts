import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsZephirIcon],svg[file-icons-zephir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.652 21.305L0 312.405l189.096 178.29L512 314.857zm228.839 285.96L207.647 447.13l41.288-368.84zM218.084 89.714l-39.278 350.889L39.987 309.717z"></svg:path>`,
})
export class FileIconsZephirIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
