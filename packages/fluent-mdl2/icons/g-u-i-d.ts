import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GUIDIcon],svg[fluent-mdl2-g-u-i-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h384v128H0zm512 0h768v128H512zm1536 0v128h-640V128zM0 512h384v128H0zm512 0h768v128H512zm896 0h640v128h-640zM0 896h384v128H0zm512 0h768v128H512zm896 0h640v128h-640zM0 1280h384v128H0zm512 0h768v128H512zm896 0h640v128h-640zM0 1664h384v128H0zm512 0h768v128H512zm896 0h640v128h-640z"></svg:path>`,
})
export class FluentMdl2GUIDIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
