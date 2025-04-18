import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMilkOffIcon],svg[lucide-milk-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 2h8M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"></svg:path><svg:path d="M7 15a6.47 6.47 0 0 1 5 0a6.47 6.47 0 0 0 3.435.435M2 2l20 20"></svg:path></svg:g>`,
})
export class LucideMilkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
