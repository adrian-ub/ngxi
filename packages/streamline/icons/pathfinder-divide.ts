import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderDivideIcon],svg[streamline-pathfinder-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 9.5a1 1 0 0 0 1-1v-7c0-.545-.455-1-1-1h-7c-.545 0-1 .455-1 1v7c0 .545.455 1 1 1z"></svg:path><svg:path d="M12.5 13.5a1 1 0 0 0 1-1v-7c0-.545-.455-1-1-1h-7c-.545 0-1 .455-1 1v7c0 .545.455 1 1 1z"></svg:path></svg:g>`,
})
export class StreamlinePathfinderDivideIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
