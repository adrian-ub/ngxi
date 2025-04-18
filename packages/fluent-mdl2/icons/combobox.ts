import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ComboboxIcon],svg[fluent-mdl2-combobox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v1408H0V256zm-128 128H128v1152h1792zm-384 768l-256-256h512zM512 1024H256V896h256zm512 0H768V896h256z"></svg:path>`,
})
export class FluentMdl2ComboboxIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
