import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonKissingFaceWithSmilingEyesBoldIcon],svg[iconamoon-kissing-face-with-smiling-eyes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m14 10l1-1l1 1m-6 0L9 9l-1 1m5 6l-2-1l2-1"></svg:path></svg:g>`,
})
export class IconamoonKissingFaceWithSmilingEyesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
