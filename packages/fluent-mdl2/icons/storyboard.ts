import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StoryboardIcon],svg[fluent-mdl2-storyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1664H0V128zM128 256v256h1792V256zm0 1408h1024V640H128zm1792 0V640h-640v1024zm-512-896h384v128h-384zm0 256h384v128h-384zm0 256h384v128h-384zm-384-512v768H256V768zM896 896H384v512h512z"></svg:path>`,
})
export class FluentMdl2StoryboardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
