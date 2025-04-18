import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Tiles2Icon],svg[fluent-mdl2-tiles-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 2048V768h640v1280zM384 896v1024h384V896zM256 640V0h640v640zm128-512v384h384V128zM1024 0h640v1280h-640zm512 1152V128h-384v1024zm-512 896v-640h640v640zm128-512v384h384v-384z"></svg:path>`,
})
export class FluentMdl2Tiles2Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
