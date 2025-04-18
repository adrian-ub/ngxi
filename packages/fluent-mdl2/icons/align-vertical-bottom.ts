import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignVerticalBottomIcon],svg[fluent-mdl2-align-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1792v128H0v-128zm-384-128h-512V512h512zM1536 640h-256v896h256zM896 1664H384V0h512zM768 128H512v1408h256z"></svg:path>`,
})
export class FluentMdl2AlignVerticalBottomIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
