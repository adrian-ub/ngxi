import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDirectorChairIcon],svg[iconoir-director-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 12L5 21M5 3v9m14-9v9M5 12l14 9M4 12h16"></svg:path><svg:path d="M5 4h14M5 7h14"></svg:path></svg:g>`,
})
export class IconoirDirectorChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
