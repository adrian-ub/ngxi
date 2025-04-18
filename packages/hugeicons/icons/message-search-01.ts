import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMessageSearch01Icon],svg[hugeicons-message-search-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 3.004c-.562.008-1.621.03-2.17.067c-4.184.278-7.516 3.658-7.79 7.9a20 20 0 0 0 0 2.52c.1 1.545.783 2.976 1.588 4.184c.467.845.159 1.901-.328 2.823c-.35.665-.526.997-.385 1.237c.14.24.455.248 1.084.263c1.245.03 2.084-.322 2.75-.813c.377-.279.566-.418.696-.434s.387.09.899.3c.46.19.995.307 1.485.34c1.425.094 2.914.095 4.342 0c4.183-.278 7.515-3.658 7.789-7.9c.031-.49.044-.992.039-1.49M8.5 15h7m-7-5H12"></svg:path><svg:path d="M20.265 7.27L22 9m-.829-3.914a3.086 3.086 0 1 0-6.171 0a3.086 3.086 0 0 0 6.171 0"></svg:path></svg:g>`,
})
export class HugeiconsMessageSearch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
