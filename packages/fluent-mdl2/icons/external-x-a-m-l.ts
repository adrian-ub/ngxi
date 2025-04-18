import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ExternalXAMLIcon],svg[fluent-mdl2-external-x-a-m-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 256H256v1664H128V128h1792v1024h-128zm-137 1408l-220 384H997l-220-384l220-384h438zm361 0l-219 384h-148l220-384l-220-384h148zm-1453 0l220 384H635l-219-384l219-384h148z"></svg:path>`,
})
export class FluentMdl2ExternalXAMLIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
