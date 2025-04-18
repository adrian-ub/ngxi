import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SystemIcon],svg[fluent-mdl2-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2000 1525q12 12 21 29t15 36t9 38t3 36q0 27-10 50t-27 40t-41 28t-50 10H128q-27 0-50-10t-40-27t-28-41t-10-50q0-16 3-35t9-39t15-36t21-29l208-208V384h1536v933zM384 1280h1280V512H384zm1536 384q0-11-4-28t-12-26l-203-202H347l-203 202q-8 8-12 25t-4 29z"></svg:path>`,
})
export class FluentMdl2SystemIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
