import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDepartmentIcon],svg[flat-color-icons-department-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C5CAE9" d="M42 42H6V9l18-7l18 7z"></svg:path><svg:path fill="#9FA8DA" d="M6 42h36v2H6z"></svg:path><svg:path fill="#BF360C" d="M20 35h8v9h-8z"></svg:path><svg:path fill="#1565C0" d="M31 27h6v5h-6zm-10 0h6v5h-6zm-10 0h6v5h-6zm20 8h6v5h-6zm-20 0h6v5h-6zm20-16h6v5h-6zm-10 0h6v5h-6zm-10 0h6v5h-6zm20-8h6v5h-6zm-10 0h6v5h-6zm-10 0h6v5h-6z"></svg:path>`,
})
export class FlatColorIconsDepartmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
