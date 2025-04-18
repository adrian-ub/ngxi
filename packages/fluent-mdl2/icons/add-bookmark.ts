import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddBookmarkIcon],svg[fluent-mdl2-add-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 1581l64 32q32 16 64 33v143l-128-64l-640 323V0h1280v1280h-128V128H512v1712q129-65 256-130t256-129m896 83v128h-256v256h-128v-256h-256v-128h256v-256h128v256z"></svg:path>`,
})
export class FluentMdl2AddBookmarkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
