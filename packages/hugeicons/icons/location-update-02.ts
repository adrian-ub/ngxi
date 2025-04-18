import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLocationUpdate02Icon],svg[hugeicons-location-update-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20 11l2 1c0-5.523-4.477-10-10-10c-4.1 0-7.625 2.468-9.168 6M4 13l-2-1c0 5.523 4.477 10 10 10c4.1 0 7.625-2.468 9.168-6M12 11.5h.009"></svg:path><svg:path d="M12 7c2.435 0 4.5 2.016 4.5 4.463c0 2.485-2.098 4.23-4.036 5.415a.94.94 0 0 1-.928 0C9.603 15.681 7.5 13.957 7.5 11.463C7.5 9.016 9.565 7 12 7"></svg:path></svg:g>`,
})
export class HugeiconsLocationUpdate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
