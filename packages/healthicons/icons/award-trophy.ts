import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAwardTrophyIcon],svg[healthicons-award-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v6a5 5 0 0 1-5 5h-1.683A12.02 12.02 0 0 1 26 27.834V34h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6v-6.166A12.02 12.02 0 0 1 12.683 20H11a5 5 0 0 1-5-5V9a1 1 0 0 1 1-1h5zm24 9v-6h4v5a3 3 0 0 1-3 3h-1zm-24-6H8v5a3 3 0 0 0 3 3h1z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAwardTrophyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
