import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FlameSolidIcon],svg[fluent-mdl2-flame-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1821 1315q0 102-26 195t-73 175t-115 149t-148 114t-175 74t-196 26q-102 0-195-26t-175-73t-149-115t-114-148t-74-175t-26-196q0-99 25-195t79-181q21 42 45 83t55 73t72 53t93 20q46 0 86-17t70-48t47-70t18-86q0-39-12-70t-34-63q-26-37-45-72t-33-71t-19-76t-7-86q0-95 33-182t93-155t140-114t176-58q15 214 100 392t234 331q122 125 186 271t64 321"></svg:path>`,
})
export class FluentMdl2FlameSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
