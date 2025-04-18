import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAudioBook01Icon],svg[hugeicons-audio-book-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 16.929V10c0-3.771 0-5.657-1.172-6.828S16.271 2 12.5 2h-1C7.729 2 5.843 2 4.672 3.172S3.5 6.229 3.5 10v9.5"></svg:path><svg:path d="M20.5 17H6a2.5 2.5 0 0 0 0 5h14.5"></svg:path><svg:path d="M20.5 17a2.5 2.5 0 0 0 0 5M14.96 9.838c-.125.538-.722.917-1.915 1.676c-1.154.734-1.73 1.101-2.195.954a1.14 1.14 0 0 1-.508-.336C10 11.746 10 10.997 10 9.5s0-2.246.341-2.631c.142-.16.317-.276.509-.337c.465-.147 1.041.22 2.195.954c1.193.759 1.79 1.138 1.916 1.676c.052.221.052.455 0 .676"></svg:path></svg:g>`,
})
export class HugeiconsAudioBook01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
