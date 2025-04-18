import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UnSetColorIcon],svg[fluent-mdl2-un-set-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v1536H0V256zm-128 128H128v1280h1792zm-128 1152H256V512h1536zm-128-896H540l1124 715zM384 1408h1124L384 693z"></svg:path>`,
})
export class FluentMdl2UnSetColorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
