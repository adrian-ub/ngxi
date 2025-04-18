import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCartonIcon],svg[lucide-lab-carton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 6V3c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v3l-3 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10Z"></svg:path><svg:path d="M13 22V10l3-4H8m-3 4h8"></svg:path></svg:g>`,
})
export class LucideLabCartonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
