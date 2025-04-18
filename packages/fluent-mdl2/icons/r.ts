import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RIcon],svg[fluent-mdl2-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 1664H896V896h253q49 0 94 12t80 37t55 64t21 94q0 83-46 136t-124 76q39 22 70 58t54 75l136 216h-148l-123-206q-13-22-27-41t-30-33t-38-23t-49-9h-51zm0-415h106q60 0 98-35t38-97t-39-90t-96-28h-107zm897-1121v1792H128V128zm-128 128H256v1536h1536z"></svg:path>`,
})
export class FluentMdl2RIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
