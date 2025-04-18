import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSteeringWheelFilledIcon],svg[tabler-steering-wheel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M4 12a8 8 0 0 0 7 7.937V14.83a3 3 0 0 1-1.898-2.05l-5.07-1.504q-.031.36-.032.725m15.967-.725l-5.069 1.503a3 3 0 0 1-1.897 2.051v5.108a8 8 0 0 0 6.985-8.422zM8 5.072a8 8 0 0 0-3.536 4.244l4.812 1.426a3 3 0 0 1 5.448 0l4.812-1.426A8 8 0 0 0 8 5.072"></svg:path>`,
})
export class TablerSteeringWheelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
