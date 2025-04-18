import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GenerateIcon],svg[fluent-mdl2-generate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2011 1728l-318 317l-90-90l163-163h-614v-128h614l-163-163l90-90zm-669 192l128 128H128V0h1115l549 549v734l-128-128V640h-512V128H256v1792zm-62-1408h293l-293-293z"></svg:path>`,
})
export class FluentMdl2GenerateIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
