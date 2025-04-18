import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SecondaryNavIcon],svg[fluent-mdl2-secondary-nav-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 384v128H0V384zM0 896h2048v128H0zm1024 640v-128h1024v128z"></svg:path>`,
})
export class FluentMdl2SecondaryNavIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
