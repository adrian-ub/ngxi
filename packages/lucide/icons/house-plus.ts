import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHousePlusIcon],svg[lucide-house-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"></svg:path><svg:path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8m6-15h6m-3-3v6"></svg:path></svg:g>`,
})
export class LucideHousePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
