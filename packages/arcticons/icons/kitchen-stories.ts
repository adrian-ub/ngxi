import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKitchenStoriesIcon],svg[arcticons-kitchen-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.273 5.5c0 3.699-4.485 3.699-4.485 7.397c0 3.697 4.485 3.697 4.485 7.394c0 3.7-4.485 3.7-4.485 7.4c0 3.702 4.485 3.702 4.485 7.404S5.788 38.798 5.788 42.5m20.454-37c0 3.699-4.484 3.699-4.484 7.397c0 3.697 4.484 3.697 4.484 7.394c0 3.7-4.484 3.7-4.484 7.4c0 3.702 4.484 3.702 4.484 7.404s-4.484 3.703-4.484 7.405m20.454-37c0 3.699-4.485 3.699-4.485 7.397c0 3.697 4.485 3.697 4.485 7.394c0 3.7-4.485 3.7-4.485 7.4c0 3.702 4.485 3.702 4.485 7.404s-4.485 3.703-4.485 7.405"></svg:path>`,
})
export class ArcticonsKitchenStoriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
