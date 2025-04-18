import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2OpenInNewWindowIcon],svg[fluent-mdl2-open-in-new-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 256h384v384h-128V475l-456 456l-91-91l456-456h-165zm0 768l128-128v768H0V512h1280l-128 128H128v896h1408z"></svg:path>`,
})
export class FluentMdl2OpenInNewWindowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
