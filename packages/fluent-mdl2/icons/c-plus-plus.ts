import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CPlusPlusIcon],svg[fluent-mdl2-c-plus-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v1792H128V128zm-119 119H247v1554h1554zm-521 1033v-256h128v256h256v128h-256v256h-128v-256h-256v-128zm-640-256H384V896h256V640h128v256h256v128H768v256H640z"></svg:path>`,
})
export class FluentMdl2CPlusPlusIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
