import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BranchCommitIcon],svg[fluent-mdl2-branch-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 960q0 83-29 158t-80 135t-121 99t-154 51v517H896v-517q-83-11-153-50t-122-99t-80-135t-29-159q0-83 29-158t80-135t121-99t154-51V0h128v517q83 11 153 50t122 99t80 135t29 159m-448 320q66 0 124-25t101-68t69-102t26-125t-25-124t-69-101t-102-69t-124-26t-124 25t-102 69t-69 102t-25 124t25 124t68 102t102 69t125 25"></svg:path>`,
})
export class FluentMdl2BranchCommitIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
