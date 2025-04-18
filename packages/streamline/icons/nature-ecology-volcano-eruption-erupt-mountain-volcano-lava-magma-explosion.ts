import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNatureEcologyVolcanoEruptionEruptMountainVolcanoLavaMagmaExplosionIcon],svg[streamline-nature-ecology-volcano-eruption-erupt-mountain-volcano-lava-magma-explosion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5s-4-2-4-5h-5c0 3-4 5-4 5m10-8a2 2 0 0 0 0-4a2 2 0 0 0-1.24.43a2.5 2.5 0 0 0-4.52 0A2 2 0 0 0 3.5 1.5a2 2 0 0 0 0 4m2-1v4m3-4v4"></svg:path>`,
})
export class StreamlineNatureEcologyVolcanoEruptionEruptMountainVolcanoLavaMagmaExplosionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
