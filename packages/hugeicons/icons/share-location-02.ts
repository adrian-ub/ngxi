import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShareLocation02Icon],svg[hugeicons-share-location-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10m-3-.5a11 11 0 0 1-3.277-1.754m0-15.492A11.3 11.3 0 0 1 9 2.5m-7 7.746a9.6 9.6 0 0 1 1.296-3.305M2 13.754a9.6 9.6 0 0 0 1.296 3.305m8.7-5.559h.006"></svg:path><svg:path d="M12 7c2.435 0 4.5 2.016 4.5 4.463c0 2.485-2.098 4.23-4.036 5.415a.94.94 0 0 1-.928 0C9.603 15.681 7.5 13.957 7.5 11.463C7.5 9.016 9.565 7 12 7"></svg:path></svg:g>`,
})
export class HugeiconsShareLocation02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
