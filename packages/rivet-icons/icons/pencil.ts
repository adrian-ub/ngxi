import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsPencilIcon],svg[rivet-icons-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.353 2.938L13.06.646a1.5 1.5 0 0 0-2.122 0L1 10.586v4.359h4.413l9.937-9.882a1.5 1.5 0 0 0 .003-2.125m-4.439.562L12 2.414l1.584 1.584l-1.089 1.083zM9.5 4.914l1.577 1.577l-6.49 6.454H3v-1.53l6.5-6.5Z"></svg:path>`,
})
export class RivetIconsPencilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
