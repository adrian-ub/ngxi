import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCradleIcon],svg[marketeq-cradle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 6.25h-4.166a12.5 12.5 0 0 0-12.5 12.5h16.666z"></svg:path><svg:path stroke="#306CFE" d="m37.5 42.604l-2.187-11.812M12.5 42.604l2.188-11.791M41.667 18.75H8.333m31.25 4.167V18.75H10.417v4.167a8.333 8.333 0 0 0 8.333 8.333h12.5a8.334 8.334 0 0 0 8.333-8.333"></svg:path><svg:path stroke="#344054" d="M41.667 41.667a67.9 67.9 0 0 1-33.334 0"></svg:path></svg:g>`,
})
export class MarketeqCradleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
