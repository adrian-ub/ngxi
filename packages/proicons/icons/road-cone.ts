import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsRoadConeIcon],svg[proicons-road-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2.75 21.25h18.5"></svg:path><svg:path stroke-linejoin="round" d="m4.75 21.25l1.502-4.625M19.25 21.25l-1.502-4.625M7.754 12l-1.502 4.625M7.754 12l1.501-4.625l1.278-3.934a1 1 0 0 1 .95-.691h1.033a1 1 0 0 1 .951.691l1.278 3.934L16.246 12m-8.492 0h8.492m-9.994 4.625h11.496M16.246 12l1.502 4.625"></svg:path></svg:g>`,
})
export class ProiconsRoadConeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
