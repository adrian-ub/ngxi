import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SwitcherStartEndIcon],svg[fluent-mdl2-switcher-start-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211 467l365-365l365 365l-90 90l-211-210v1701H512V347L301 557zm1536 1024l90 90l-365 365l-365-365l90-90l211 210V0h128v1701z"></svg:path>`,
})
export class FluentMdl2SwitcherStartEndIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
