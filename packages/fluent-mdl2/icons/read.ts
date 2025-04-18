import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReadIcon],svg[fluent-mdl2-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 120l1024 512v1288H0V632zm873 580l-873-436l-873 436l324 324h1098zM128 1792h1792V859l-293 293H421L128 859z"></svg:path>`,
})
export class FluentMdl2ReadIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
