import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWatch1Icon],svg[streamline-watch-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path d="M9.5 3.25V1.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.75m5 7.484V12.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1.766"></svg:path></svg:g>`,
})
export class StreamlineWatch1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
