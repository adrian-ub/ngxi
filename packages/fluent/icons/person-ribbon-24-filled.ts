import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonRibbon24FilledIcon],svg[fluent-person-ribbon-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15.505c0-.527.09-1.032.256-1.501H6.253a2.25 2.25 0 0 0-2.25 2.25v.92c0 .572.18 1.13.511 1.596C6.056 20.935 8.58 22.008 12 22.008q2.267 0 4-.63v-3.044a4.5 4.5 0 0 1-1-2.83m-3-13.5a5 5 0 0 1 5 5.001a5 5 0 1 1-5-5.002m11 13.5a3.5 3.5 0 1 1-7.001 0a3.5 3.5 0 0 1 7.001 0m-1 3.743a4.5 4.5 0 0 1-2.5.758c-.925 0-1.785-.28-2.5-.758v3.506c0 .201.226.32.392.206l2.108-1.453l2.108 1.453a.25.25 0 0 0 .392-.206z"></svg:path>`,
})
export class FluentPersonRibbon24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
