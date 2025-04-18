import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAnsibleIcon],svg[file-icons-ansible-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M260.846 115.014L350.47 336.22L215.094 229.582zM512 256c0 196.338-214.007 319.716-384.289 221.547s-170.281-344.925 0-443.094S512 59.662 512 256m-91.937 131.177L282.201 55.402c-7.234-19.626-35.912-19.263-43.301 0L87.587 419.317h51.761l59.899-150.043l178.75 144.409c21.89 20.653 53.006-.09 42.066-26.506"></svg:path>`,
})
export class FileIconsAnsibleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
