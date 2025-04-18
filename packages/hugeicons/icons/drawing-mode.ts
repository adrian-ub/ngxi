import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrawingModeIcon],svg[hugeicons-drawing-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 9a7 7 0 1 0-7 7"></svg:path><svg:path d="M16 9h-1c-2.828 0-4.243 0-5.121.879C9 10.757 9 12.172 9 15v1c0 2.828 0 4.243.879 5.121C10.757 22 12.172 22 15 22h1c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-1c0-2.828 0-4.243-.879-5.121C20.243 9 18.828 9 16 9"></svg:path></svg:g>`,
})
export class HugeiconsDrawingModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
