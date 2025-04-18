import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPipeline24RegularIcon],svg[fluent-pipeline-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.25A2.25 2.25 0 0 1 6.486 6h11.028A2.25 2.25 0 0 1 22 6.25v10.5a2.25 2.25 0 0 1-4.486.25H6.486A2.25 2.25 0 0 1 2 16.75zm3 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm1.5 9.25h11v-8h-11zm14-9.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class FluentPipeline24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
