import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReopenPagesIcon],svg[fluent-mdl2-reopen-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 640h512v1280H512v-512H0V128h1536zm384 128h-384v128h384zm-512-512H128v128h1280zM128 512v768h1280V512zm512 1280h1280v-768h-384v384H640z"></svg:path>`,
})
export class FluentMdl2ReopenPagesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
