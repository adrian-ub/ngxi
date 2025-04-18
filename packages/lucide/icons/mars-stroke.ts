import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMarsStrokeIcon],svg[lucide-mars-stroke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14 6l4 4m-1-7h4v4m0-4l-7.75 7.75"></svg:path><svg:circle cx="9" cy="15" r="6"></svg:circle></svg:g>`,
})
export class LucideMarsStrokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
