import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitAngleDoubleLeftIcon],svg[uit-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.207 12l3.146-3.146a.5.5 0 0 0-.707-.707l-3.5 3.5a.5.5 0 0 0 0 .707l3.5 3.5a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.708zm9.147 3.146L14.207 12l3.146-3.146a.5.5 0 0 0-.707-.707l-3.5 3.5a.5.5 0 0 0 0 .707l3.5 3.5a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class UitAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
