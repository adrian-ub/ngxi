import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AutoFitWindowIcon],svg[fluent-mdl2-auto-fit-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2048V896h2048v1152h-128v-128h-512v128h-128v-128H768v128H640v-128H128v128zm1280-256v-384H768v384zm640 0v-384h-512v384zM128 1024v256h1792v-256zm0 384v384h512v-384zm0-896v256H0V128h128v256h256v128zm1792-384h128v640h-128V512h-384V384h384zM797 768H669L1120 0h128zm-93-384q-40 0-75-15t-61-41t-41-61t-15-75t15-75t41-61t61-41t75-15t75 15t61 41t41 61t15 75t-15 75t-41 61t-61 41t-75 15m0-288q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320 480q0-40 15-75t41-61t61-41t75-15t75 15t61 41t41 61t15 75t-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75m288 0q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28t68-28t28-68"></svg:path>`,
})
export class FluentMdl2AutoFitWindowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
