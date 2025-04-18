import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BranchCompareIcon],svg[fluent-mdl2-branch-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 1414q56 12 103 41t81 70t53 94t19 109q0 66-25 124t-69 102t-102 69t-124 25t-124-25t-102-68t-69-102t-25-125q0-57 19-109t53-93t81-71t103-41V576q0-40-15-75t-41-61t-61-41t-75-15h-166l163 163l-90 90l-318-317L1251 3l90 90l-163 163h166q66 0 124 25t101 69t69 102t26 124zm-64 506q40 0 75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15m-803-509l318 317l-318 317l-90-90l163-163H704q-66 0-124-25t-102-68t-69-102t-25-125V634q-56-12-103-41t-81-70t-53-94t-19-109q0-66 25-124t68-101t102-69T448 0t124 25t101 69t69 102t26 124q0 57-19 109t-53 93t-81 71t-103 41v838q0 40 15 75t41 61t61 41t75 15h166l-163-163zM256 320q0 40 15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75"></svg:path>`,
})
export class FluentMdl2BranchCompareIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
