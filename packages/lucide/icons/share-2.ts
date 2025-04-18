import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideShare2Icon],svg[lucide-share-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="18" cy="5" r="3"></svg:circle><svg:circle cx="6" cy="12" r="3"></svg:circle><svg:circle cx="18" cy="19" r="3"></svg:circle><svg:path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></svg:path></svg:g>`,
})
export class LucideShare2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
