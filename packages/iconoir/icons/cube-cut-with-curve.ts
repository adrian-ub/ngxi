import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeCutWithCurveIcon],svg[iconoir-cube-cut-with-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.528 7.293L9 10.333M22 2h-2m-8 10v-2a8 8 0 0 1 5.5-7.602M22 12h-2m-8 10v-2a8 8 0 0 1 5.5-7.602"></svg:path><svg:path d="m12 22l-8.691-4.828A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0L15 3.667M12 12L3.528 7.293M12 21v-9m3 1.5V4"></svg:path></svg:g>`,
})
export class IconoirCubeCutWithCurveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
