import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TagGroupIcon],svg[fluent-mdl2-tag-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1600 832q-27 0-50-10t-40-27t-28-41t-10-50q0-27 10-50t27-40t41-28t50-10q27 0 50 10t40 27t28 41t10 50q0 27-10 50t-27 40t-41 28t-50 10m192-576h256v859l-896 896l-556-558Q318 1174 37 896L933 0h859zM987 128L219 896l165 165l805-805h475V128zm933 933V384h-677l-768 768l677 677z"></svg:path>`,
})
export class FluentMdl2TagGroupIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
