import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlAqsaMosqueIcon],svg[hugeicons-al-aqsa-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 12h12v10H6z"></svg:path><svg:path d="M14 22v-4a2 2 0 1 0-4 0v4m8-10l2.702 1.013c1.078.405 1.298.722 1.298 1.873V22h-4zM2 14.886c0-1.151.22-1.468 1.298-1.873L6 12v10H2zM16.208 9.5C17.313 6.36 15.144 3 12 3S6.687 6.36 7.792 9.5M12 3V2M8 12v-2m8 2v-2m-9-.5h10"></svg:path></svg:g>`,
})
export class HugeiconsAlAqsaMosqueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
