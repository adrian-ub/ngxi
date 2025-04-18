import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChickenGrilledStreamIcon],svg[streamline-chicken-grilled-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path stroke-linejoin="round" d="M2.243 2.246v1.562m4.563-1.562v1.562M4.525 1.083v1.562"></svg:path><svg:path d="M11.509 4.602a.955.955 0 1 0 1.91 0a.955.955 0 1 0-1.91 0"></svg:path><svg:path stroke-linejoin="round" d="m10.841 8.677l.212.093c1.48.7 1.889 1.606 1.889 2.85v.298a1 1 0 0 1-1 1H1.64c-.327 0-.634-.161-.76-.463c-.277-.669-.599-2.013.238-3.685c1.21-2.416 4.187-2.947 6.094-1.947l.09.046"></svg:path><svg:path d="M10.158 10.006c.928-1.018.976-2.485.108-3.275s-2.323-.605-3.25.413c-.843.925-.96 2.219-.325 3.04q.096.127.217.235"></svg:path><svg:path stroke-linejoin="round" d="M11.806 5.296L10.32 6.781"></svg:path></svg:g>`,
})
export class StreamlineChickenGrilledStreamIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
