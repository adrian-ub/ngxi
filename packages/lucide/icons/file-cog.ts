import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideFileCogIcon],svg[lucide-file-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 2v4a2 2 0 0 0 2 2h4M2.305 15.53l.923-.382m0-2.296l-.924-.383"></svg:path><svg:path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5m.852 4.728l-.383-.923m.383 6.467l-.383.924m2.679-6.468l.383-.923m-.001 7.391l-.382-.924m1.624-3.92l.923-.383m-.923 2.679l.923.383"></svg:path><svg:circle cx="6" cy="14" r="3"></svg:circle></svg:g>`,
})
export class LucideFileCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
