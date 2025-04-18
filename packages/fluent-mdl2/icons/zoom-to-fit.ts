import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ZoomToFitIcon],svg[fluent-mdl2-zoom-to-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m749 456l-90-91L1024 0l365 365l-90 91l-275-275zm550 1136l90 91l-365 365l-365-365l90-91l275 275zM456 749l-275 275l275 275l-91 90L0 1024l365-365zm1592 275l-365 365l-91-90l275-275l-275-275l91-90zM640 640h768v768H640zm128 640h512V768H768z"></svg:path>`,
})
export class FluentMdl2ZoomToFitIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
