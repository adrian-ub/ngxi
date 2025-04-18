import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibHtml5ShieldIcon],svg[cib-html5-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 2l2.181 24.738L15.969 30l9.85-3.262L28 2zm19.262 7.994H11.774l.256 3.088h10.975l-.85 9.275l-6.119 1.688v.019h-.069l-6.169-1.706l-.375-4.738h2.981l.219 2.381l3.344.906l3.356-.906l.375-3.887H9.267l-.8-9.1h15.069z"></svg:path>`,
})
export class CibHtml5ShieldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
