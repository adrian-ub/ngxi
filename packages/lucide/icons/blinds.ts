import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBlindsIcon],svg[lucide-blinds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3h18m-1 4H8m12 4H8m2 8h10M8 15h12M4 3v14"></svg:path><svg:circle cx="4" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LucideBlindsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
