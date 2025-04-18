import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHexagon01Icon],svg[hugeicons-hexagon-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.882 3.33C10.404 2.443 11.165 2 12 2s1.596.443 3.118 1.33l2.764 1.61c1.522.887 2.283 1.33 2.7 2.06S21 8.616 21 10.39v3.22c0 1.774 0 2.66-.418 3.39c-.417.73-1.178 1.173-2.7 2.06l-2.764 1.61C13.596 21.557 12.835 22 12 22s-1.596-.443-3.118-1.33l-2.764-1.61c-1.522-.887-2.283-1.33-2.7-2.06S3 15.383 3 13.61v-3.22C3 8.615 3 7.73 3.418 7c.417-.73 1.178-1.173 2.7-2.06z" color="currentColor"></svg:path>`,
})
export class HugeiconsHexagon01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
