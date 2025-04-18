import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteShareNodesOutlineIcon],svg[flowbite-share-nodes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.926 10.898L15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path>`,
})
export class FlowbiteShareNodesOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
