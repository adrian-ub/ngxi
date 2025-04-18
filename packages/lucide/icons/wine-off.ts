import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWineOffIcon],svg[lucide-wine-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 22h8M7 10h3m7 0h-1.343M12 15v7M7.307 7.307A12.3 12.3 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981Q8.807 2.511 9 2h6c1.5 4 2 6 2 8q-.001.613-.145 1.198M2 2l20 20"></svg:path>`,
})
export class LucideWineOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
