import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscoverCircleIcon],svg[hugeicons-discover-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path><svg:path d="m12.401 8.298l2.92-.973c.886-.296 1.33-.443 1.564-.21c.233.234.086.677-.21 1.564l-.973 2.92c-.503 1.51-.755 2.265-1.297 2.806c-.541.542-1.296.794-2.806 1.297l-2.92.973c-.887.296-1.33.444-1.564.21s-.086-.678.21-1.564l.973-2.92c.503-1.51.755-2.265 1.297-2.806c.541-.542 1.296-.794 2.806-1.297M12 12l-.006.006"></svg:path></svg:g>`,
})
export class HugeiconsDiscoverCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
