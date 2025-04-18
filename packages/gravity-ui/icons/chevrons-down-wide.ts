import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsDownWideIcon],svg[gravity-ui-chevrons-down-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.903 3.617a.75.75 0 1 0-.806 1.266l5.5 3.5a.75.75 0 0 0 .806 0l5.5-3.5a.75.75 0 1 0-.806-1.266L8 6.861zm0 4.5a.75.75 0 1 0-.806 1.266l5.5 3.5a.75.75 0 0 0 .806 0l5.5-3.5a.75.75 0 1 0-.806-1.266L8 11.361z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsDownWideIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
