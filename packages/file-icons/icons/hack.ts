import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsHackIcon],svg[file-icons-hack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 327.618V164.133L165.067 0v161.756zM178.975 166.99v161.58l160.487-161.258zm-13.908 166.099V180.382L13.093 333.09zM0 348.249V511.26l163.126-163.01zm178.975-1.052V512l170.936-171.002v-165.56z"></svg:path>`,
})
export class FileIconsHackIcon {
  readonly viewBox = input("0 0 350 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
