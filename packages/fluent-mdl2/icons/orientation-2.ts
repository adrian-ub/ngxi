import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Orientation2Icon],svg[fluent-mdl2-orientation-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 768v128h-128V768zm0-768v128h-128V0zm256 0v128h-128V0zm0 768v128h-128V768zm128-384V256h128v128zm0 256V512h128v128zM1280 0v1408H384V0zm-128 1280V128H512v1152zM1920 0h128v128h-128zm0 896V768h128v128zm-384 640v-128h512v512h-128v-293q-103 103-199 181t-201 132t-225 81t-271 27q-142 0-273-36t-244-103t-207-160t-160-207t-103-245t-37-273h128q0 124 32 238t90 213t141 182t181 140t214 91t238 32q132 0 241-25t204-75t183-120t177-164z"></svg:path>`,
})
export class FluentMdl2Orientation2Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
