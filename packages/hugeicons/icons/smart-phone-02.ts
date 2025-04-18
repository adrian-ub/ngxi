import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSmartPhone02Icon],svg[hugeicons-smart-phone-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.5 6c-.08-1.42-.303-2.323-.912-2.975C16.629 2 15.086 2 12 2S7.371 2 6.412 3.025C5.803 3.677 5.581 4.581 5.5 6m13 12c-.08 1.42-.303 2.323-.912 2.975C16.629 22 15.086 22 12 22s-4.629 0-5.588-1.025c-.609-.652-.831-1.556-.912-2.975"></svg:path><svg:path d="m9 2l.089.534c.193 1.157.29 1.736.686 2.088C10.19 4.989 10.776 5 12 5s1.81-.01 2.225-.378c.397-.352.493-.93.686-2.088L15 2m-4 17h2M4 8.5s1 .346 1 1.313c0 .966-1 1.22-1 2.187s1 1.221 1 2.188c0 .966-1 1.312-1 1.312m16-7s-1 .346-1 1.313c0 .966 1 1.22 1 2.187s-1 1.221-1 2.188c0 .966 1 1.312 1 1.312"></svg:path></svg:g>`,
})
export class HugeiconsSmartPhone02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
