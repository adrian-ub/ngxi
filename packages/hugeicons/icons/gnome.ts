import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGnomeIcon],svg[hugeicons-gnome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 12.5c2.583 0 4.903.386 6.5 1c0-.98-.278-1.94-.801-2.768l-4.932-7.81a.907.907 0 0 0-1.534 0l-4.932 7.81A5.2 5.2 0 0 0 5.5 13.5c1.597-.614 3.917-1 6.5-1"></svg:path><svg:path d="M16 13s.5.8.5 2c0 0 0 2-1.5 2s-1.5-1.5-3-1.5S10.5 17 9 17s-1.5-2-1.5-2c0-1.2.5-2 .5-2"></svg:path><svg:path d="M18.5 13.5s.5.9.5 2.5c0 2-1.262 3.13-3 4c-1.41.705-2.572 1.66-3.135 2.16c-.239.213-.545.34-.865.34s-.626-.127-.865-.34C10.572 21.66 9.41 20.705 8 20c-1.738-.87-3-2-3-4c0-1.6.5-2.5.5-2.5"></svg:path></svg:g>`,
})
export class HugeiconsGnomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
