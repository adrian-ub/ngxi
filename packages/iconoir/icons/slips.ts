import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSlipsIcon],svg[iconoir-slips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M1 4.6a.6.6 0 0 1 .6-.6h20.8a.6.6 0 0 1 .6.6v3.912c0 .284-.199.53-.476.595c-1.052.247-3.635.914-5.524 1.893c-3.444 1.786-3.93 6.655-3.993 8.382a.637.637 0 0 1-.626.618h-.761a.637.637 0 0 1-.627-.618C10.931 17.655 10.443 12.786 7 11c-1.889-.98-4.472-1.646-5.524-1.893A.614.614 0 0 1 1 8.512z"></svg:path>`,
})
export class IconoirSlipsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
