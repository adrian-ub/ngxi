import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideShredderIcon],svg[lucide-shredder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 22v-5m4 2v-2m0-15v4a2 2 0 0 0 2 2h4m-2 12v-3M2 13h20"></svg:path><svg:path d="M20 13V7l-5-5H6a2 2 0 0 0-2 2v9m2 7v-3"></svg:path></svg:g>`,
})
export class LucideShredderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
