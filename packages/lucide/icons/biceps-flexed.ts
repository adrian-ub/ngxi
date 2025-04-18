import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBicepsFlexedIcon],svg[lucide-biceps-flexed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7c-4.077 0-8.153-.82-10.371-2.462c-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3a2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"></svg:path><svg:path d="M15 14a5 5 0 0 0-7.584 2"></svg:path><svg:path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"></svg:path></svg:g>`,
})
export class LucideBicepsFlexedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
