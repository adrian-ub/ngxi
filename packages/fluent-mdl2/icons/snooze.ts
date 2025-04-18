import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SnoozeIcon],svg[fluent-mdl2-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1280h256v128H512V896h128zm0-640q88 0 170 23t153 64t129 100t100 130t65 153t23 170t-23 170t-64 153t-100 129t-130 100t-153 65t-170 23t-170-23t-153-64t-129-100t-100-130t-65-153t-23-170t23-170t64-153t100-129t130-100t153-65t170-23m0 1152q106 0 199-40t162-110t110-163t41-199t-40-199t-110-162t-163-110t-199-41t-199 40t-162 110t-110 163t-41 199t40 199t110 162t163 110t199 41m721-1141h239v117h-448v-66l250-329h-225V256h421v78zm687-226v87h-320v-49l179-248h-161v-87h301v59l-170 238z"></svg:path>`,
})
export class FluentMdl2SnoozeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
