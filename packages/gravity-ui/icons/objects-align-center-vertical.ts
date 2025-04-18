import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiObjectsAlignCenterVerticalIcon],svg[gravity-ui-objects-align-center-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 3H4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5m2 4.25V3.5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3.75h-.25a.75.75 0 0 0 0 1.5H2v3.75a2 2 0 0 0 2 2h1.5a2 2 0 0 0 2-2V8.75h1V10a2 2 0 0 0 2 2H12a2 2 0 0 0 2-2V8.75h.25a.75.75 0 0 0 0-1.5H14V6a2 2 0 0 0-2-2h-1.5a2 2 0 0 0-2 2v1.25zM10 8v2a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiObjectsAlignCenterVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
