import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRubElHizbIcon],svg[hugeicons-rub-el-hizb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.5 6.643c0-1.01 0-1.515.314-1.83c.314-.313.819-.313 1.829-.313h10.714c1.01 0 1.515 0 1.83.314c.313.314.313.819.313 1.829v10.714c0 1.01 0 1.515-.314 1.83c-.314.313-.819.313-1.829.313H6.643c-1.01 0-1.515 0-1.83-.314c-.313-.314-.313-.819-.313-1.829z"></svg:path><svg:path d="M10.509 3.054C11.212 2.351 11.563 2 12 2s.788.351 1.491 1.054l7.455 7.455C21.649 11.212 22 11.563 22 12s-.351.788-1.054 1.491l-7.455 7.455C12.788 21.649 12.437 22 12 22s-.788-.351-1.491-1.054L3.054 13.49C2.351 12.788 2 12.437 2 12s.351-.788 1.054-1.491z"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsRubElHizbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
