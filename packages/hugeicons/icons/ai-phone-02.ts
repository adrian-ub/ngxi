import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiPhone02Icon],svg[hugeicons-ai-phone-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.25 6.75L18 9h-2m3.5-2.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 10.5L18 15h-2m3.5 2.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m.75-5.25H12m7.5 0a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m-10 7h.009"></svg:path><svg:path d="M16 6c-.08-1.42-.302-2.323-.909-2.975C14.136 2 12.598 2 9.523 2S4.911 2 3.955 3.025S3 5.7 3 9v6c0 3.3 0 4.95.955 5.975C4.911 22 6.448 22 9.523 22s4.613 0 5.568-1.025c.607-.652.828-1.556.909-2.975"></svg:path></svg:g>`,
})
export class HugeiconsAiPhone02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
