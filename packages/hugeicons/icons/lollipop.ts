import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLollipopIcon],svg[hugeicons-lollipop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="8" r="6"></svg:circle><svg:path d="M12 14v8M6 7.965C7 6.5 9 5.67 10.286 6.123c1.475.52 1.741 2.258 3.214 2.784c1.5.536 2-1.437 4.5-.972"></svg:path></svg:g>`,
})
export class HugeiconsLollipopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
