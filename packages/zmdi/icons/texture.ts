import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTextureIcon],svg[zmdi-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 2q24 6 31 30L32 382q-11-3-19-11T2 352zM189 0h61L0 250v-61zM43 0h42L0 85V43q0-18 12.5-30.5T43 0m298 384h-42l85-85v42q0 18-13 30q-12 13-30 13m-207 0l250-250v61L195 384z"></svg:path>`,
})
export class ZmdiTextureIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
