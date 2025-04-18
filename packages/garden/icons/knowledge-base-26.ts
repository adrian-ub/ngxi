import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenKnowledgeBase26Icon],svg[garden-knowledge-base-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5H3.5c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5H7c3 0 4 2 4 2h1V7c0-.1-1-2-4-2m1 10H6c-.5 0-1-.5-1-1s.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1m0-4H6c-.5 0-1-.5-1-1s.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1m5-4v14h1s1-2 4-2h3.5c.3 0 .5-.2.5-.5v-13c0-.3-.2-.5-.5-.5H18c-3 0-4 1.9-4 2m2 7c0-.5.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1h-3c-.5 0-1-.5-1-1m0-4c0-.5.5-1 1-1h3c.5 0 1 .5 1 1s-.5 1-1 1h-3c-.5 0-1-.5-1-1"></svg:path>`,
})
export class GardenKnowledgeBase26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
