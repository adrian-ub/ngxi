import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ForumIcon],svg[fluent-mdl2-forum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1408H731l-475 475v-475H0zm1920 1280V256H128v1152h256v293l293-293zM1792 384v896H256V384zM512 1152V896H384v256zm0-384V512H384v256zm1152 384V896H640v256zm0-384V512H640v256z"></svg:path>`,
})
export class FluentMdl2ForumIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
