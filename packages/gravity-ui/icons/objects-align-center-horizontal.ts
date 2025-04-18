import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignCenterHorizontalIcon],svg[gravity-ui-objects-align-center-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 5.5V4a.5.5 0 0 0-.5-.5h-9A.5.5 0 0 0 3 4v1.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5m-4.25 2h3.75a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8.75v-.25a.75.75 0 0 0-1.5 0V2H3.5a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2h3.75v1H6a2 2 0 0 0-2 2V12a2 2 0 0 0 2 2h1.25v.25a.75.75 0 0 0 1.5 0V14H10a2 2 0 0 0 2-2v-1.5a2 2 0 0 0-2-2H8.75zM8 10H6a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignCenterHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
