import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RingerIcon],svg[fluent-mdl2-ringer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1536v128h-512q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100H256v-128h128V768q0-88 23-170t64-153t100-129t130-100t153-65t170-23t170 23t153 64t129 100t100 130t65 153t23 170v768zm-256 0V768q0-106-40-199t-110-162t-163-110t-199-41t-199 40t-162 110t-110 163t-41 199v768zm-512 256q27 0 50-10t40-27t28-41t10-50H896q0 27 10 50t27 40t41 28t50 10"></svg:path>`,
})
export class FluentMdl2RingerIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
