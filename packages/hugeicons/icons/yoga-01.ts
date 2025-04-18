import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYoga01Icon],svg[hugeicons-yoga-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.092 16c-.31.682-1.022.986-1.653 1.316l-3.646 1.907C2.328 19.99 3.059 22 4.63 22c3.492 0 6.254-1.694 9.41-3c.795-.329 1.18-.259 1.96.091"></svg:path><svg:path d="M9 19.091c.78-.35 1.165-.42 1.96-.091c3.156 1.306 5.918 3 9.41 3c1.57 0 2.302-2.01.837-2.777l-3.646-1.907c-.631-.33-1.344-.634-1.653-1.316M10 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 4a6 6 0 0 0-6 6a6 6 0 0 0 6-6m0 0a6 6 0 0 1 6 6a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class HugeiconsYoga01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
