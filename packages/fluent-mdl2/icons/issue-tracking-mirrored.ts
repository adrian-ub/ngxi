import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2IssueTrackingMirroredIcon],svg[fluent-mdl2-issue-tracking-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0h1536v2048H256zm1408 1920V128H384v1792zM1024 512v128H512V512zm0 512v128H512v-128zm0 512v128H512v-128zm493-1107l-237 237l-173-173l90-90l83 83l147-147zm0 512l-237 237l-173-173l90-90l83 83l147-147zm0 512l-237 237l-173-173l90-90l83 83l147-147z"></svg:path>`,
})
export class FluentMdl2IssueTrackingMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
