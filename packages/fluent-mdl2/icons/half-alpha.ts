import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HalfAlphaIcon],svg[fluent-mdl2-half-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1105 128l640 1920h-135l-171-512H615l-170 512H310L950 128zM658 1408h739L1027 300z"></svg:path>`,
})
export class FluentMdl2HalfAlphaIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
