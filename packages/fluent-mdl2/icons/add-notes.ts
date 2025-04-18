import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddNotesIcon],svg[fluent-mdl2-add-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h2048v128H0zm0 640V768h2048v128zm0 512v-128h1280v128zm0 512v-128h1280v128zm1790-640v256h256v128h-256v256h-128v-256h-256v-128h256v-256z"></svg:path>`,
})
export class FluentMdl2AddNotesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
