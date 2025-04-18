import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignage4Icon],svg[streamline-signage-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.854 9.419v3.852m6.292-3.852v3.852M7 .729v1.458m.583.001H6.417M10.583.729v1.458m.584.001H10M3.5.729v1.458m-.583.001h1.166m7.001 4.437H8.75M1.375.729h11.25s.5 0 .5.5v7.69s0 .5-.5.5H1.375s-.5 0-.5-.5v-7.69s0-.5.5-.5"></svg:path>`,
})
export class StreamlineSignage4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
