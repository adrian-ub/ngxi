import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNoseIcon],svg[hugeicons-nose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 17c2 0 2.5 4 5 4s3-4 5-4"></svg:path><svg:path d="M8.5 3c0 2.279-1.368 7.018-2.764 9.112c-1.573 2.36-2.956 6.265.002 7.692C7.198 20.51 9 19.087 9 19.087M15.5 3c0 2.278 1.368 7.018 2.764 9.112c1.573 2.36 2.956 6.265-.002 7.692c-1.46.705-3.262-.717-3.262-.717"></svg:path></svg:g>`,
})
export class HugeiconsNoseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
