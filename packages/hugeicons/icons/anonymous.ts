import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAnonymousIcon],svg[hugeicons-anonymous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 15a3 3 0 1 0 0 6a3 3 0 0 0 0-6m10 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-3 2h-4m12-4c-2.457-1.227-6.027-2-10-2s-7.543.773-10 2"></svg:path><svg:path d="m19 11.5l-1.058-6.788c-.215-1.384-1.719-2.134-2.933-1.463l-.615.34a4.94 4.94 0 0 1-4.788 0l-.615-.34c-1.214-.67-2.718.08-2.933 1.463L5 11.5"></svg:path></svg:g>`,
})
export class HugeiconsAnonymousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
