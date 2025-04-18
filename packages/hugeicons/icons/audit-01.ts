import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAudit01Icon],svg[hugeicons-audit-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 10.5V10c0-3.771 0-5.657-1.172-6.828S14.771 2 11 2S5.343 2 4.172 3.172S3 6.229 3 10v6c0 1.864 0 2.796.304 3.53a4 4 0 0 0 2.165 2.165C6.204 22 7.136 22 9 22M7 7h8m-8 4h4"></svg:path><svg:path d="M15.283 19.004c-.06-.888-.165-1.838-.601-2.912c-.373-.916-.269-3.071 1.818-3.071s2.166 2.155 1.794 3.07c-.436 1.075-.518 2.025-.576 2.913M21 22h-9v-1.246c0-.446.266-.839.653-.961l2.255-.716q.242-.077.494-.077h2.196q.252 0 .494.077l2.255.716c.387.122.653.515.653.961z"></svg:path></svg:g>`,
})
export class HugeiconsAudit01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
