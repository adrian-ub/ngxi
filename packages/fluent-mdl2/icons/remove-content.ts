import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RemoveContentIcon],svg[fluent-mdl2-remove-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2045 1245l-355 355l355 355l-90 90l-355-355l-355 355l-90-90l355-355l-355-355l90-90l355 355l355-355zM256 1792h864l-128 128H128V128h1792v864l-128 128V256H256z"></svg:path>`,
})
export class FluentMdl2RemoveContentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
