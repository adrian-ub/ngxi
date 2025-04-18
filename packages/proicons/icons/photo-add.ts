import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPhotoAddIcon],svg[proicons-photo-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="15.091" cy="8.909" r="1.5" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 16.57a4 4 0 0 0 4 3.93h3.48M3.5 16.57V7.5a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v3.48m-17 5.59l.178-.2l3.206-3.827a2 2 0 0 1 3.066 0l1.242 1.482"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-8.993a.5.5 0 0 1 .5.5V17h2.493a.5.5 0 1 1 0 1H18v2.494a.5.5 0 0 1-1 0V18h-2.493a.5.5 0 1 1 0-1H17v-2.493a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class ProiconsPhotoAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
