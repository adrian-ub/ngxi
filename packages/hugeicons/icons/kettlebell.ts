import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKettlebellIcon],svg[hugeicons-kettlebell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 9c1.212-2.861 1.82-3.849 1.33-4.929a2.8 2.8 0 0 0-.635-.886c-1.672-1.58-9.718-1.58-11.39 0a2.8 2.8 0 0 0-.635.886C5.18 5.151 5.79 6.14 7 9"></svg:path><svg:path d="M12 8a8 8 0 0 0-6.325 12.898C6.395 21.827 7.064 22 8.22 22h7.558c1.157 0 1.827-.173 2.546-1.102A8 8 0 0 0 12 8m3 8h1.5m-9 0H9"></svg:path><svg:circle cx="12" cy="16" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsKettlebellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
