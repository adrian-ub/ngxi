import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChildofIcon],svg[fluent-mdl2-childof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 256v128H128V256zm557 723l365 365l-365 365l-90-90l210-211H512V512h128v768h1061l-210-211z"></svg:path>`,
})
export class FluentMdl2ChildofIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
