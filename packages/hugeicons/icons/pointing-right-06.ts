import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPointingRight06Icon],svg[hugeicons-pointing-right-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 4.5h-6m6 0c0-.7-1.995-2.008-2.5-2.5M22 4.5c0 .7-1.995 2.008-2.5 2.5m-6.574 6.005h3.102m0 0h4.468a1.503 1.503 0 1 0 0-3.003h-5.463m.995 3.003l-.027 1.055a2 2 0 0 1-.978 1.668m.01-5.726h-4.561m4.561 0l-2.759-2.594c-1.867-1.572-3.228-.746-3.984-.165l-3.973 2.88a2 2 0 0 1-1.173.38H2.011m10.984 5.506h1.004a2 2 0 0 0 1.024-.281m0 0l-.054 1.335a2 2 0 0 1-.89 1.613m-2.116.337h1.003c.411 0 .794-.124 1.112-.337m0 0l-.268 1.591A2 2 0 0 1 11.806 22H8.258c-.604 0-1.21-.049-1.784-.238c-.478-.157-1.004-.377-1.347-.647c-.74-.582-1.003-.99-1.638-1.095c-.508-.085-1.146-.097-1.49-.097" color="currentColor"></svg:path>`,
})
export class HugeiconsPointingRight06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
