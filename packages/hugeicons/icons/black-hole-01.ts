import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBlackHole01Icon],svg[hugeicons-black-hole-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="13" rx="10" ry="5"></svg:ellipse><svg:path d="M18.602 12c-.961 1.165-3.554 2-6.602 2s-5.64-.835-6.602-2"></svg:path><svg:path d="M10.063 13.5a2 2 0 1 1 3.874 0M6 4l3 9.5M7 20l2-2m8-12l-2 7.5m2 6.5l-2-2M12 2v9m0 11v-4"></svg:path></svg:g>`,
})
export class HugeiconsBlackHole01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
