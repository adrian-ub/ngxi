import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSushi01Icon],svg[hugeicons-sushi-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 13c0 3.002 0 4.504-.879 5.436c-2.087 2.215-12.405 1.95-14.242 0C4 17.504 4 16.002 4 13"></svg:path><svg:path d="M12.04 4C4.453 4 2.477 8.796 2.039 12.633c-.188 1.642.3 1.616 1.653.908c2.068-1.083 4.817-1.775 8.348-1.775c3.526 0 6.224.69 8.268 1.77c1.35.713 1.836.738 1.656-.904C21.544 8.796 19.627 4 12.04 4"></svg:path><svg:path d="M6.996 12c0-2.528.887-7.436 6-8M15 12c0-1.939.512-5.264 3-7"></svg:path></svg:g>`,
})
export class HugeiconsSushi01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
