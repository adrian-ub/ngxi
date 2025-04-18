import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDatabaseZapIcon],svg[lucide-database-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="12" cy="5" rx="9" ry="3"></svg:ellipse><svg:path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4l-3 5h4l-3 5"></svg:path><svg:path d="M3 12a9 3 0 0 0 11.59 2.87"></svg:path></svg:g>`,
})
export class LucideDatabaseZapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
