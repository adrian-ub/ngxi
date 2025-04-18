import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsGraphIcon],svg[ls-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 648h717v-56H56V46H0zm98-110h616V96L584 215l-121-44l-128 146l-131-47L98 380z"></svg:path>`,
})
export class LsGraphIcon {
  readonly viewBox = input("0 0 717 648")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
