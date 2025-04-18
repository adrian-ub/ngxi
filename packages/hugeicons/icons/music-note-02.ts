import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMusicNote02Icon],svg[hugeicons-music-note-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 7.137V17m0-9.863c1.893 1.68 3.57 2.867 5.006 3.545c.688.324 1.31.386 2.014.073A5.04 5.04 0 0 0 21 6.15c-1.928 1.36-4.312.622-6.315-.645c-1.64-1.036-2.46-1.554-2.828-1.501a.87.87 0 0 0-.613.33C11 4.612 11 5.454 11 7.137M11 17a4 4 0 1 1-8 0a4 4 0 0 1 8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsMusicNote02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
