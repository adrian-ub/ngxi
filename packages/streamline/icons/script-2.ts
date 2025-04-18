import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineScript2Icon],svg[streamline-script-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 3.5v8a2 2 0 0 1-2 2H.5a2 2 0 0 0 2-2v-9a2 2 0 0 1 2-2h7.25"></svg:path><svg:path d="M11.75.5a1.75 1.75 0 0 1 1.75 1.75V3a.5.5 0 0 1-.5.5h-3V2.25A1.75 1.75 0 0 1 11.75.5M6 4h1.5M5 7h2.5M5 10h2.5"></svg:path></svg:g>`,
})
export class StreamlineScript2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
