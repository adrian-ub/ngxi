import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPsychotherapyFillIcon],svg[ri-psychotherapy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.245-3.305A8 8 0 0 1 11 2m0 5a1 1 0 0 0-1 1v.999L9 9a1 1 0 0 0 0 2l1-.001V12a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiPsychotherapyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
