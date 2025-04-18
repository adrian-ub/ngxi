import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWindmillIcon],svg[streamline-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 7.936c-.5 1.688-1 3.814-1 5.564h7c0-1.73-.488-3.825-.982-5.503M7 5.5v-5h.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2z"></svg:path><svg:path d="M4.5 8.5v-1a2 2 0 0 1 2-2H7v5h-.5a2 2 0 0 1-2-2m7.5-3H7V6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2zM7 5v.5H2V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2"></svg:path></svg:g>`,
})
export class StreamlineWindmillIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
