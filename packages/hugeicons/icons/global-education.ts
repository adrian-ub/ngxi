import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGlobalEducationIcon],svg[hugeicons-global-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.498 5c-1.303-.022-1.928.234-2.275 1.142C2.013 6.693 2 7.296 2 7.886V18c.108.634.288 1.055.742 1.4c.741.56 1.725.637 2.64.803c2.004.363 3.747.978 6.612 1.797m7.495-17c.577-.05 1.01-.023 1.354.13c1.372.615 1.144 2.632 1.144 4.136V17c.007.597-.031 1.061-.115 1.432c-.32 1.41-2.129 1.587-3.55 1.85c-1.778.328-3.675.897-6.328 1.718m0 0v-7m-.001-3a5 5 0 0 0 4.997-5c0-2.762-2.237-5-4.997-5m0 10a5 5 0 0 1-4.997-5c0-2.762 2.237-5 4.997-5m0 10c1.104 0 1.999-2.24 1.999-5c0-2.762-.895-5-2-5m0 10c-1.103 0-1.998-2.24-1.998-5c0-2.762.895-5 1.999-5" color="currentColor"></svg:path>`,
})
export class HugeiconsGlobalEducationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
