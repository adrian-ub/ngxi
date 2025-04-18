import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTeachingIcon],svg[hugeicons-teaching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 15c-2.292 6-8.708 0-11 6m13.5-6h1.501c2.357 0 3.536 0 4.268-.732s.732-1.911.732-4.268V8c0-2.357 0-3.536-.732-4.268S19.36 3 17.001 3h-4c-2.357 0-3.535 0-4.267.732c-.62.62-.716 1.561-.73 3.268"></svg:path><svg:circle cx="7.5" cy="12.5" r="2.5"></svg:circle><svg:path d="M12 7h6m0 4h-3"></svg:path></svg:g>`,
})
export class HugeiconsTeachingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
