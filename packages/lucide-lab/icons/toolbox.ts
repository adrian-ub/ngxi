import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabToolboxIcon],svg[lucide-lab-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></svg:path><svg:path d="M8 21a2 2 0 0 0 2-2v-8a4 4 0 0 0-8 0v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a4 4 0 0 0-4-4H6m-4 6h20m-8 2v-4m4 4v-4"></svg:path></svg:g>`,
})
export class LucideLabToolboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
