import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GatherIcon],svg[fluent-mdl2-gather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1920v-512h512v512zm128-384v256h256v-256zm1408-896h512v896h-512zm384 768v-256h-256v256zm0-384V768h-256v256zM0 1280V768h512v512zm128-384v256h256V896zM0 640V128h512v512zm128-384v256h256V256zm873 605l90-90l317 317l-317 317l-90-90l163-163H640v-128h524z"></svg:path>`,
})
export class FluentMdl2GatherIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
