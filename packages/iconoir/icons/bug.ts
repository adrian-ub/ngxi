import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBugIcon],svg[iconoir-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21c-3.866 0-7-4.03-7-9s3.134-9 7-9s7 4.03 7 9s-3.134 9-7 9m6-3.5l2 2m-1-10l2-1m-16 1l-2-1"></svg:path><svg:path d="M18 8s-3 1-6 1M6 8s3 1 6 1m0 0v12m-7-7H2m20 0h-3M6 17.5l-2 2"></svg:path></svg:g>`,
})
export class IconoirBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
