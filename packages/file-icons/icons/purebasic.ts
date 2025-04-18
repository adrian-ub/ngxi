import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPurebasicIcon],svg[file-icons-purebasic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m222.085 0l250.53 15.316l-103.931 126.906l-24.069 4.376l-49.23 53.607l97.367 20.422l-79.863 92.262l-16.41 6.564l-81.322-20.786l-41.208 42.666l261.47 76.582l-94.086 87.521L322.735 512L39.385 403.692l96.935-128.501l-52.174-13.239l58.076-83.627l16.421-2.81l49.22 8.28l41.573-56.889l-102.838-14.222z"></svg:path>`,
})
export class FileIconsPurebasicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
