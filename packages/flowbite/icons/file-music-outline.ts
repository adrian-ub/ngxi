import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFileMusicOutlineIcon],svg[flowbite-file-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8 7.5V8s3 1 3 4m3-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1m-6 12c0 1.105-1.12 2-2.5 2S8 17.105 8 16s1.12-2 2.5-2s2.5.895 2.5 2"></svg:path>`,
})
export class FlowbiteFileMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
