import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDiggIcon],svg[ps-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 28v82H2v164h128V28zM48 233v-82h36v82zm92-123h46v164h-46zm0-82h46v46h-46zm189 82H206v164h77v36h-77v46h123zm-77 123v-82h31v82zm210-123H340v164h81v36h-81v46h122zm-41 123h-35v-82h35z"></svg:path>`,
})
export class PsDiggIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
