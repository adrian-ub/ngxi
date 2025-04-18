import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesGraduationHatSolidIcon],svg[bubbles-graduation-hat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.325 7.259a.654.654 0 0 1 0 1.214l-10.762 4.34c-.422.17-.894.169-1.314-.003l-7.99-3.27v7.9a2.13 2.13 0 0 1 1.263 1.95v3.453a.5.5 0 0 1-.5.5H.752a.5.5 0 0 1-.5-.5V19.39c0-.873.518-1.62 1.264-1.951V8.826l-.867-.354a.655.655 0 0 1 0-1.212l10.6-4.338c.42-.172.892-.173 1.314-.003zm-10.273 6.768l5.85-2.36v3.838a.8.8 0 0 1-.344.668c-.888.596-3.417 2.074-6.65 2.074s-5.647-1.48-6.486-2.074a.79.79 0 0 1-.323-.65v-3.816l5.654 2.314a3.06 3.06 0 0 0 2.3.006z" clip-rule="evenodd"></svg:path>`,
})
export class BubblesGraduationHatSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
