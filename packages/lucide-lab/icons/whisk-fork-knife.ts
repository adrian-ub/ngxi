import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabWhiskForkKnifeIcon],svg[lucide-lab-whisk-fork-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2C3.8 2 2 3.8 2 6s4 8 4 8s4-5.8 4-8s-1.8-4-4-4m0 20V2m12 20v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4m4 0V2m8 11h-2a2 2 0 0 1-2-2V6a4 4 0 0 1 4-4v20"></svg:path>`,
})
export class LucideLabWhiskForkKnifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
