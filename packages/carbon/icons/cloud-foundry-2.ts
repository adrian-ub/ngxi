import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCloudFoundry2Icon],svg[carbon-cloud-foundry-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 11V9h-8v14h2v-6h5v-2h-5v-4zM15 23H9a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H9v10h6z"></svg:path>`,
})
export class CarbonCloudFoundry2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
