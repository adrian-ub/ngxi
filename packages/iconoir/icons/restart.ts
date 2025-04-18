import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRestartIcon],svg[iconoir-restart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.677 20.567C2.531 18.021.758 12.758 2.717 8.144C4.875 3.06 10.745.688 15.829 2.846s7.456 8.029 5.298 13.113a9.95 9.95 0 0 1-3.962 4.608"></svg:path><svg:path d="M17 16v4.4a.6.6 0 0 0 .6.6H22m-10 1.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirRestartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
