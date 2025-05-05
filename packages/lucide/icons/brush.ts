import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBrushIcon],svg[lucide-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m11 10l3 3m-7.5 8A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"></svg:path><svg:path d="M9.969 17.031L21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"></svg:path></svg:g>`,
})
export class LucideBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
