import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsHaxeIcon],svg[file-icons-haxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m510.56 371.077l-57.542-115.145l57.53-114.993l1.443-2.884V.009H373.944l-2.881 1.439l-115.068 57.477L140.923 1.448l-2.88-1.44H0v138.047l1.443 2.884l57.53 114.995L1.44 371.077L0 373.96v138.03h138.048l2.885-1.444l115.062-57.588l115.058 57.588l2.885 1.444H512V373.958zm-84.064-126.348L267.298 85.491L479.58 32.482zm-341.005-.072L32.419 32.483L244.734 85.5zm-.007 22.588l159.2 159.196l-212.266 53.014zm341.01.003l53.086 212.207l-212.273-53.014z"></svg:path>`,
})
export class FileIconsHaxeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
