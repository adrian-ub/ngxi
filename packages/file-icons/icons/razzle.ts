import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsRazzleIcon],svg[file-icons-razzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 511.737V0h246.721c48.332 0 65.32 16.964 88.342 39.037c36.143 34.656 39.514 55.122 40.23 73.151v81.646c.215 51.827-29.137 78.28-82.488 115.314L402.227 512H289.275L187 315.688h-80.43v196.049zm250.475-295.581c7.93 0 21.279-16.076 21.279-22.799v-60.852c0-13.231-10.977-32.522-30.244-32.79H106.57v116.44z"></svg:path>`,
})
export class FileIconsRazzleIcon {
  readonly viewBox = input("0 0 403 512")
  readonly width = input("0.79em")
  readonly height = input("1em")
}
