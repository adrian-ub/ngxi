import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elListIcon],svg[el-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 983.901h216.099V1200H0zm0 0h216.099V1200H0zm0-327.966h216.099v216.1H0zm0-327.968h216.099v216.099H0zM0 0h216.099v216.098H0zm317.596 983.901H1200V1200H317.596zm0 0H1200V1200H317.596zm0-327.966H1200v216.1H317.596zm0-327.968H1200v216.099H317.596zm0-327.967H1200v216.098H317.596z"></svg:path>`,
})
export class ElListIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
