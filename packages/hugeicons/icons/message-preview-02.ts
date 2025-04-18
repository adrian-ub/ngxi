import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMessagePreview02Icon],svg[hugeicons-message-preview-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 3q-.337.016-.67.037c-4.184.279-7.516 3.664-7.79 7.914a20 20 0 0 0 0 2.525c.1 1.548.783 2.98 1.588 4.19c.467.848.159 1.906-.328 2.83c-.35.665-.526.998-.385 1.239c.14.24.455.248 1.084.263c1.245.03 2.084-.323 2.75-.815c.377-.279.566-.418.696-.434s.387.09.899.3c.46.19.995.308 1.485.34c1.425.095 2.914.096 4.342 0c4.183-.278 7.515-3.663 7.789-7.913a20 20 0 0 0 0-2.525q-.032-.484-.114-.951M17.5 5h.009"></svg:path><svg:path d="M21.795 4.59c.137.183.205.275.205.41s-.068.227-.205.41C21.18 6.23 19.61 8 17.5 8s-3.68-1.77-4.295-2.59C13.068 5.226 13 5.134 13 5s.068-.227.205-.41C13.82 3.77 15.39 2 17.5 2s3.68 1.77 4.295 2.59m-9.8 7.91h.01m3.986 0H16m-8 0h.009"></svg:path></svg:g>`,
})
export class HugeiconsMessagePreview02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
