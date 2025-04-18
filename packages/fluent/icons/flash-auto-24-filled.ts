import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlashAuto24FilledIcon],svg[fluent-flash-auto-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.425 2.83A1.25 1.25 0 0 1 8.603 2h6.453a1.25 1.25 0 0 1 1.186 1.645L14.79 8h3.96c1.103 0 1.665 1.327.897 2.12l-.672.693c-.732-1.17-2.564-1.081-3.107.294l-1.941 4.916l-5.341 5.513c-1.054 1.088-2.872.106-2.541-1.372l1.27-5.668l-1.57-.006a1.75 1.75 0 0 1-1.641-2.337zm10.769 8.645l3.75 9.495a.75.75 0 0 1-1.352.643l-.044-.092l-.998-2.525h-4.11l-.996 2.525a.75.75 0 0 1-.876.453l-.097-.03a.75.75 0 0 1-.453-.876l.03-.098l3.75-9.495a.73.73 0 0 1 .45-.434a.77.77 0 0 1 .546.02c.14.058.264.162.349.309zm-2.162 6.021h2.926l-1.463-3.705z"></svg:path>`,
})
export class FluentFlashAuto24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
