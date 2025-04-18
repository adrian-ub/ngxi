import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SmartGlassRemoteIcon],svg[fluent-mdl2-smart-glass-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1152v128H640v-128zm384 384v-128h128v128zm-256-256v-128h128v128zm256 0v-128h128v128zm-384 128v128H640v-128zm128 128v-128h128v128zm-128 128v128H640v-128zm384 128v-128h128v128zm-256 0v-128h128v128zm64-896q-66 0-124-25t-102-68t-69-102t-25-125t25-124t68-101t102-69t125-26t124 25t101 69t69 102t26 124t-25 124t-69 102t-102 69t-124 25m0-512q-40 0-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15t75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15M384 0h1152v2048H384zm1024 1920V128H512v1792z"></svg:path>`,
})
export class FluentMdl2SmartGlassRemoteIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
