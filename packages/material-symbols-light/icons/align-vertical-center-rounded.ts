import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignVerticalCenterRoundedIcon],svg[material-symbols-light-align-vertical-center-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.616 20q-.414 0-.717-.303t-.303-.716V12.5H3.5q-.213 0-.356-.144T3 11.999t.144-.356t.356-.143h4.096V5.02q0-.414.303-.717T8.616 4t.716.303t.303.716V11.5h4.73V8.02q0-.414.303-.717T15.385 7t.716.303t.303.716V11.5H20.5q.213 0 .356.144t.144.357t-.144.356t-.356.143h-4.096v3.48q0 .414-.303.717t-.716.303t-.717-.303t-.302-.716V12.5H9.635v6.48q0 .414-.303.717T8.616 20"></svg:path>`,
})
export class MaterialSymbolsLightAlignVerticalCenterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
