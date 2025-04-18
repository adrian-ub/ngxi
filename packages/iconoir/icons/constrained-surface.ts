import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirConstrainedSurfaceIcon],svg[iconoir-constrained-surface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 23a2 2 0 1 1 0-4a2 2 0 0 1 0 4m18 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4M3 5a2 2 0 1 1 0-4a2 2 0 0 1 0 4m18 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-8 7c0-1.246-1.158-2.5-2.572-2.5h-.857C8.152 9.5 7 10.62 7 12c0 1.19.855 2.185 2 2.438q.283.062.572.062"></svg:path><svg:path d="M11 12c0 1.246 1.159 2.5 2.572 2.5h.857C15.849 14.5 17 13.38 17 12c0-1.19-.855-2.186-2-2.438a2.7 2.7 0 0 0-.572-.062M21 19V5M3 19V5m2-2h14M5 21h14"></svg:path></svg:g>`,
})
export class IconoirConstrainedSurfaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
