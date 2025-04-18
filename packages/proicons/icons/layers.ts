import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLayersIcon],svg[proicons-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.991 3.066a2 2 0 0 0-1.982 0L2.75 7.778l8.259 4.712a2 2 0 0 0 1.982 0l8.259-4.712z"></svg:path><svg:path stroke-linecap="round" d="m2.75 12l7.268 4.147a4 4 0 0 0 3.964 0L21.25 12"></svg:path><svg:path stroke-linecap="round" d="m2.75 16.222l7.268 4.147a4 4 0 0 0 3.964 0l7.268-4.147"></svg:path></svg:g>`,
})
export class ProiconsLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
