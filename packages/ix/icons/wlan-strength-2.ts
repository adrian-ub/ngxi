import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWlanStrength2Icon],svg[ix-wlan-strength-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 394.667c0 17.672-14.336 32-32 32s-32-14.328-32-32s14.336-32 32-32s32 14.327 32 32M173.077 311.74l30.144 30.157C216.747 328.375 235.413 320 256 320s39.253 8.375 52.779 21.897l30.144-30.155c-21.248-21.248-50.582-34.409-82.923-34.409s-61.675 13.16-82.923 34.407m-60.309-60.314l30.144 30.155c28.97-28.97 68.97-46.914 113.088-46.914s84.117 17.943 113.088 46.914l30.144-30.155C362.539 214.73 311.872 192 256 192s-106.539 22.729-143.232 59.426"></svg:path>`,
})
export class IxWlanStrength2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
