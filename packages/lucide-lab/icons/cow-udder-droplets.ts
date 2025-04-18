import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCowUdderDropletsIcon],svg[lucide-lab-cow-udder-droplets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 2c0 2 .6 4 1.7 5.5L2.3 10a2 2 0 0 0 3.4 2l.9-1.6c1 .6 2.1 1.1 3.4 1.4V14a2 2 0 0 0 4 0v-2.2a8.5 8.5 0 0 0 3.4-1.4l.9 1.6a1.94 1.94 0 1 0 3.4-2l-1.4-2.5C21.4 6 22 4 22 2Zm5.9 16.6c-.6-.6-1.1-1.3-1.4-2.1c-.3.8-.8 1.5-1.4 2.1a1.93 1.93 0 1 0 2.8 0m11 0c-.6-.6-1.1-1.3-1.4-2.1c-.3.8-.8 1.5-1.4 2.1a1.93 1.93 0 1 0 2.8 0"></svg:path>`,
})
export class LucideLabCowUdderDropletsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
