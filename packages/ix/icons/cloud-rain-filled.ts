import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudRainFilledIcon],svg[ix-cloud-rain-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.3 194.679q.033-1.336.033-2.68c0-58.911-47.756-106.667-106.666-106.667c-39.089 0-73.266 21.025-91.841 52.383c-14.344-6.25-30.18-9.716-46.826-9.716c-64.801 0-117.333 52.532-117.333 117.333c0 61.206 46.864 111.466 106.666 116.855v-84.855h85.334v42.667h42.666v-42.667h85.334v85.333H384c47.128 0 85.333-38.205 85.333-85.333c0-39.774-27.211-73.192-64.033-82.653M170.667 298.665h42.666v128h-42.666zm106.666 42.667h-42.666v128h42.666zm21.334-42.667h42.666v128h-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudRainFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
