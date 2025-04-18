import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1InformationIcon],svg[noto-v1-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#40c0e7"><svg:path d="M68.97 31.66c-.64-.49-1.38-.85-2.24-1.05c-.85-.19-1.75-.3-2.72-.3s-1.88.1-2.74.3c-.87.19-1.61.55-2.26 1.05c-.64.49-1.14 1.14-1.51 1.95c-.36.81-.55 1.83-.55 3.04c0 1.19.19 2.19.55 3.02c.37.81.87 1.48 1.51 1.97s1.39.85 2.26 1.06c.86.21 1.77.32 2.74.32c.96 0 1.87-.11 2.72-.32c.86-.21 1.6-.57 2.24-1.06s1.15-1.16 1.53-1.97c.38-.83.57-1.83.57-3.02c0-1.22-.19-2.24-.57-3.04q-.57-1.215-1.53-1.95M57.52 48.94h12.97v47.51H57.52z"></svg:path><svg:path d="M64 .41C28.93.41.41 28.93.41 64c0 35.06 28.52 63.59 63.58 63.59S127.58 99.07 127.58 64C127.59 28.93 99.06.41 64 .41m0 118C34 118.41 9.6 94 9.6 64S34 9.59 64 9.59S118.41 34 118.41 64.01C118.4 94 93.99 118.41 64 118.41"></svg:path></svg:g>`,
})
export class NotoV1InformationIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
