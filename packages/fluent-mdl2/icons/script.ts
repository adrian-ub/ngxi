import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ScriptIcon],svg[fluent-mdl2-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 0q53 0 99 20t82 55t55 81t20 100q0 53-20 99t-55 82t-81 55t-100 20h-128v1280q0 53-20 99t-55 82t-81 55t-100 20H256q-53 0-99-20t-82-55t-55-81t-20-100q0-53 20-99t55-82t81-55t100-20V256q0-53 20-99t55-82t81-55T512 0zm-606 1920q-34-60-34-128t34-128H256q-27 0-50 10t-40 27t-28 41t-10 50q0 27 10 50t27 40t41 28t50 10zm222 0q27 0 50-10t40-27t28-41t10-50V256q0-68 34-128H512q-27 0-50 10t-40 27t-28 41t-10 50v1280h1024q26 0 45 19t19 45t-19 45t-45 19q-25 0-49 9t-42 28q-18 18-27 42t-10 49q0 27 10 50t27 40t41 28t50 10m384-1536q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50v128zm-1280 0h896v128H512zm0 256h896v128H512zm0 256h896v128H512zm0 256h896v128H512z"></svg:path>`,
})
export class FluentMdl2ScriptIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
