import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePathfinderMinusFront1Icon],svg[streamline-pathfinder-minus-front-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 4.5v-3c0-.545-.455-1-1-1h-7c-.545 0-1 .455-1 1v7c0 .545.455 1 1 1h3m9 3a1 1 0 0 1-1 1"></svg:path><svg:path d="M4.5 5.5a1 1 0 0 1 1-1m7 0a1 1 0 0 1 1 1m-9 7a1 1 0 0 0 1 1m8-5.5v2m-9 0V8M8 4.5h2m-2 9h2"></svg:path></svg:g>`,
})
export class StreamlinePathfinderMinusFront1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
