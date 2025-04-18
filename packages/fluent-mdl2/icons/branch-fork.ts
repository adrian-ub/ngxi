import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BranchForkIcon],svg[fluent-mdl2-branch-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1946 1472l-365 365l-90-90l210-211H0v-128h384V512h933l-210-211l90-90l365 365l-365 365l-90-90l210-211H512v768h1189l-210-211l90-90z"></svg:path>`,
})
export class FluentMdl2BranchForkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
