import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ShareiOSIcon],svg[fluent-mdl2-sharei-o-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 250L749 525l-90-90L1088 6l429 429l-90 90l-275-275v1158h-128zm256 390h512v1408H384V640h512v128H512v1152h1152V768h-384z"></svg:path>`,
})
export class FluentMdl2ShareiOSIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
