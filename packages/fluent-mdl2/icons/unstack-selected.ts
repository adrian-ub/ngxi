import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UnstackSelectedIcon],svg[fluent-mdl2-unstack-selected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 640v1152H512v-256H256v-256H0V128h1313q-69 20-133 52t-123 76H128v896h1280V640h64l64 64v576H384v128h1280V768l128-128v896H640v128h1280V640zM896 896q0-88 23-170t64-153t100-129t130-100t153-65t170-23h165l-146-147l90-90l301 301l-301 301l-90-90l146-147h-165q-106 0-199 40t-162 110t-110 163t-41 199z"></svg:path>`,
})
export class FluentMdl2UnstackSelectedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
