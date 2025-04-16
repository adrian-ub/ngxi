import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRotate3dIcon],svg[lucide-rotate-3d-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.466 7.5C15.643 4.237 13.952 2 12 2C9.239 2 7 6.477 7 12s2.239 10 5 10q.514-.002 1-.2m2.194-8.093l3.814 1.86l-1.86 3.814"></svg:path><svg:path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43c-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"></svg:path></svg:g>`,
})
export class LucideRotate3dIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
