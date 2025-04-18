import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageArrowRightIcon],svg[fluent-mdl2-page-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2042 1728l-317 317l-90-90l163-163h-646v-128h646l-163-163l90-90zm-668 192l128 128H128V0h1115l549 549v731h-128V640h-512V128H256v1792zm-94-1408h293l-293-293z"></svg:path>`,
})
export class FluentMdl2PageArrowRightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
