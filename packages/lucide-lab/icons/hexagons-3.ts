import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHexagons3Icon],svg[lucide-lab-hexagons-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4.4a2 2 0 0 0-1 1.73v4.37l-4 2.4a2 2 0 0 0-1 1.73v3.27a2 2 0 0 0 .97 1.68L6 21.4a2 2 0 0 0 2.03-.02L12 19l4 2.4a2 2 0 0 0 2.03-.02L21 19.6a2 2 0 0 0 1-1.73V14.6a2 2 0 0 0-.97-1.68L17 10.5V6.1a2 2 0 0 0-.97-1.68L13 2.6a2 2 0 0 0-2.03.02Z"></svg:path><svg:path d="m7 10.5l5 3l5-3m-5 3V19"></svg:path></svg:g>`,
})
export class LucideLabHexagons3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
