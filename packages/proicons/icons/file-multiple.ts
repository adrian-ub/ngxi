import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFileMultipleIcon],svg[proicons-file-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.237 3.013c.319.144.613.345.866.596l5.033 5.002c.252.25.454.542.6.859m-6.5-6.457a3 3 0 0 0-1.22-.263H9.5A2.5 2.5 0 0 0 7 5.25v10.5a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-5.066c0-.423-.092-.836-.265-1.214m-6.498-6.457v4.781a1.68 1.68 0 0 0 1.686 1.676h4.812"></svg:path><svg:path d="M4 6.75v9a5.5 5.5 0 0 0 5.5 5.5H16"></svg:path></svg:g>`,
})
export class ProiconsFileMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
