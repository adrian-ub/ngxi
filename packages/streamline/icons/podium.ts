import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePodiumIcon],svg[streamline-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 8.5H2l-1-5h12l-1 5H9m-2-5v-3m-2 6v7m4-7v7m-5 0h6m-7.5-10s0-3 2-3m7 3s0-3-2-3"></svg:path>`,
})
export class StreamlinePodiumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
