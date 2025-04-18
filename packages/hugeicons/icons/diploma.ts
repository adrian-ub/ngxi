import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiplomaIcon],svg[hugeicons-diploma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.5 17.838c1.03-.151 1.763-.444 2.328-1.01C22 15.657 22 13.771 22 10s0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10s0 5.657 1.172 6.828c.808.809 1.956 1.06 3.828 1.137M17 7H7"></svg:path><svg:path d="M14.5 14.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M9.5 14.5c0 4.066 1.722 6.37 2.5 7.5l1.5-3l1.75 1L17 21c-.735-.711-1.494-2.953-1.494-2.953"></svg:path></svg:g>`,
})
export class HugeiconsDiplomaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
