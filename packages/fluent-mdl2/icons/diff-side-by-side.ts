import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DiffSideBySideIcon],svg[fluent-mdl2-diff-side-by-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384h896v1280H0zm768 1152V768H128v768zM128 512v128h640V512zm1920-128v1280h-896V384zm-128 896h-640v256h640zm0-768h-640v512h640z"></svg:path>`,
})
export class FluentMdl2DiffSideBySideIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
