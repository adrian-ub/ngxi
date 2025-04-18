import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProjector01Icon],svg[hugeicons-projector-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.5 10h-5c-1.875 0-2.812 0-3.47.477a2.5 2.5 0 0 0-.553.553C2 11.689 2 12.626 2 14.5s0 2.812.477 3.47a2.5 2.5 0 0 0 .554.553C3.688 19 4.625 19 6.5 19h11c1.875 0 2.812 0 3.47-.477a2.5 2.5 0 0 0 .553-.553C22 17.312 22 16.375 22 14.5s0-2.812-.477-3.47a2.5 2.5 0 0 0-.553-.553c-.453-.328-1.038-.43-1.97-.463M5.5 13.5h.009"></svg:path><svg:circle cx="15.5" cy="10" r="3.5"></svg:circle><svg:path d="M6.5 19L5 22m12.5-3l1.5 3M12.5 5l-1-1m8 0l-1 1m-3-1V2"></svg:path></svg:g>`,
})
export class HugeiconsProjector01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
