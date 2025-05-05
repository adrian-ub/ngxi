import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGuitarIcon],svg[lucide-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.9 12.1l4.514-4.514M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4zM6 16l2 2m.23-8.15A3 3 0 0 1 11 8a5 5 0 0 1 5 5a3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4a6 6 0 0 1-6-6a4 4 0 0 1 4-4a2 2 0 0 0 1.85-1.23z"></svg:path>`,
})
export class LucideGuitarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
