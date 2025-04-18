import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCartonOffIcon],svg[lucide-lab-carton-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.1 8.5L16 6V3c0-.6-.4-1-1-1H9"></svg:path><svg:path d="M11.7 6H16l3 4v3.3M2 2l20 20m-3-3v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10l2.1-2.9M13 13v9"></svg:path></svg:g>`,
})
export class LucideLabCartonOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
